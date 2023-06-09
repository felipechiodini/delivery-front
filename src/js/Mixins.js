export default {
  methods: {
    formaterCellphone(number) {
      if (number) return number.replace(/[^0-9]/g, '').slice(0, 11).replace(/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/, '($1) $2-$3');
    },
    formaterCaptalize(string) {
      if (string) return string.split(' ').map(string => string.charAt(0).toLocaleUpperCase() + string.slice(1)).join(' ')
    },
    formatDate(date) {
      return new Date(date).toLocaleString('pt-BR', {
        timeZone: 'UTC',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      })
    },
    formaterCpf(cpf) {
      if (cpf) return cpf.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    },
    isValidCpf(cpf) {
      cpf = cpf.replace(/[^\d]+/g, '');
      if (cpf == '') return false;
      // Elimina CPFs invalidos conhecidos
      if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
      // Valida 1o digito
      let add = 0;
      for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
      let rev = 11 - (add % 11);
      if (rev == 10 || rev == 11)
        rev = 0;
      if (rev != parseInt(cpf.charAt(9)))
        return false;
      // Valida 2o digito
      add = 0;
      for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11)
        rev = 0;
      if (rev != parseInt(cpf.charAt(10)))
        return false;
      return true;
    },
    currency(value) {
      return value?.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    }
  }
}