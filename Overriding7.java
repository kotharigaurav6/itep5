// program showing the concept of method overriding
class RBI
{
    double rate()
    {
        return 1.0;
    }
}
class PNB extends RBI
{
    @Override
    double rate()
    {
        return 1.45;
    }
}
class SBI extends RBI
{
    @Override
    double rate()
    {
        return 3.02;
    }
}
class BOI extends RBI{}

class Overriding7
{
    public static void main(String args[])
    {
        RBI obj;
        obj = new PNB();
            System.out.println("rate by pnb : "+obj.rate());
        obj = new SBI();
            System.out.println("rate by sbi : "+obj.rate());        
        obj = new BOI();
            System.out.println("rate by boi : "+obj.rate());        
    }
}