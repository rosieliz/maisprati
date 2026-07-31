public class Main {
    public static void main(String[] args) {
        System.out.println("Olá, mundo!");

        /*
         * Tipos Primitivos -> byte, short, int, float, double, decimal, long
         * Tipos Por Referência -> String, Array...
         *
         * byte    - 8 bits - -128 a 127
         * short   - 16 bits
         * int     - 32 bits
         * long    - 64 bits
         * float   - 32 bits ~7 casas de precisão
         * double  - 64 bits ~ 15 casas de precisão
         * char    - 16 bits
         * boolean - true ou false
         */

        byte idade = 21;
        short ano = 2026;
        int populacao = 213000;
        float altura = 1.82f;
        double pi = 3.141592653589793;
        char inicial = 'I';
        boolean certo = true;

        System.out.printf("Idade: %d | Altura: %.2fm\n", idade, altura);

        String nome = "Igor Borges Kühl";
        System.out.println(nome.length());
        System.out.println(nome.toUpperCase());
        System.out.println(nome.charAt(0));
    }
}
