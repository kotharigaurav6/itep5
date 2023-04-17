// program showing the concept of Interface
import java.util.Scanner;
@FunctionalInterface
interface Moveable{
    void show();
    static void table(int num){
        for(int i=1;i<=10;i++){
            System.out.println(num+" x "+i+" = "+(num*i));
        }
    }
    default int factorial(int num){
        int fact=1;
        for(int i=1;i<=num;i++){
            fact=fact*i;
        }
        return fact;
    }
}
class Interface13 implements Moveable
{
    public void show(){
        System.out.println("Show method called");
    }
    public static void main(String args[])
    {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
            Moveable.table(num);
            Moveable obj = new Interface13();
            System.out.println("Factorial : "+obj.factorial(num));
            obj.show();
    }
}