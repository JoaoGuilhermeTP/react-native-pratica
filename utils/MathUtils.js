import { Alert } from 'react-native';
class MathUtils {
    static funcaoCalculo(number1, number2, acao) {
        var sum;

        switch (acao) {
            case '+':
                sum = parseFloat(number1) + parseFloat(number2);
                break;
            case '-':
                sum = parseFloat(number1) - parseFloat(number2);
                break;
            case '*':
                sum = parseFloat(number1) * parseFloat(number2);
                break;
            case '/':
                sum = parseFloat(number1) / parseFloat(number2);
                break;
            default:
                break;
        }
        if (isNaN(sum)) {
            alert('Erro', 'Por favor, insira números válidos.');
        } else {
            alert(`A soma é: ${sum}`);
        }
    }



    static funcaoBaskara(valueA, valueB, valueC) {

        var delta = Math.pow(valueB, 2) - (4 * valueA * valueC);

        if (delta < 0) {
            alert("Delta é menor do que zero");
        } else {
            var x1 = ((valueB * -1) + Math.sqrt(delta)) / (2 * valueA);
            var x2 = ((valueB * -1) - Math.sqrt(delta)) / (2 * valueA);
            alert(`X1 = ${x1} e X2 = ${x2}`);
        }
    }
}










export default MathUtils;
