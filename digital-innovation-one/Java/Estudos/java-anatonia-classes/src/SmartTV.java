// Criando uma TV com funcionalidade de Ligar/Desligar, mudar canal e aumentar volume.

public class SmartTV {

    boolean estado = false;
    int canal = 0;
    int volume;

    public void ligarTV() {
        estado = true;

        System.out.println("Ligando TV ...");

    }

    public void desligarTV() {
        estado = false;

        System.out.println("Desligando TV ...");
    }

    public void aumentarVolume() {
        volume++;

        System.out.println("Aumentando volume ( Volume atual " + volume + " )");
    }

    public void diminuirVolume() {
        volume--;

        System.out.println("Diminuindo volume ( Volume atual " + volume + " )");
    }

    public void alterarCanal(int canal_correspondente) {
        if (canal_correspondente > 0) {
            canal = canal_correspondente;
            System.out.println("Canal alterado para " + canal);
        } else {

            System.out.println("Canal inválido");
        }

    }

    // sobrecarga de métodos:  Um método recebe um argumento (o número do canal), enquanto o outro não recebe argumento algum, permitindo o incremento automático do canal.

    public void alterarCanal() {
        canal++;

        System.out.println("Canal alterado para " + canal);
    }

    public void voltarCanal() {
        canal--;

        System.out.println("Canal alterado para " + canal);
    }

    public static void main(String[] args) {

        SmartTV smarTv1 = new SmartTV();

        smarTv1.alterarCanal();
        smarTv1.alterarCanal(4);
    }
}
