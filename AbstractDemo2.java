// program showing the concept of abstract class
abstract class RBI
{
    abstract double rate();
}
class PNB extends RBI{
    double rate(){
        return 1.23;
    }
} 
class SBI extends RBI{
    double rate(){
        return 2.43;
    }
} 
class BOI extends RBI{
    double rate(){
        return 1.22;
    }
}
class AbstractDemo2
{
    public static void main(String args[])
    {
        RBI obj;
            obj = new PNB();
            System.out.println("PNB rate : "+obj.rate());

            obj = new SBI();
            System.out.println("SBI rate : "+obj.rate());

            obj = new BOI();
            System.out.println("BOI rate : "+obj.rate());
    }
}