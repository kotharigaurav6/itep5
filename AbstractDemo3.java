// program showing the concept of abstract class
import java.util.Scanner;
abstract class RBI
{
    abstract double rate();
    RBI(){
        System.out.println("---WELCOME TO BANK---");
    }
    double finalSum(int bal,double rate)
    {
        return bal+bal*rate/100;
    }
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
class AbstractDemo3
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter balance : ");
        int bal = sc.nextInt();

        RBI obj;
            obj = new PNB();
            System.out.println("PNB rate : "+obj.rate());
            System.out.println("Final Sum By PNB : "+obj.finalSum(bal,obj.rate()));

            obj = new SBI();
            System.out.println("SBI rate : "+obj.rate());
            System.out.println("Final Sum By SBI : "+obj.finalSum(bal,obj.rate()));
    }
}