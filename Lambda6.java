// program showing the concept of lambda expression
import java.util.Scanner;
@FunctionalInterface
interface Operation
{
    int operation(int a,int b);
}
class Lambda6{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
             
        Operation obj;
         obj = (a1,b1)->(a1+b1);
         System.out.println("Sum  : "+obj.operation(a,b));

         obj = (a1,b1)->(a1-b1);
         System.out.println("Sub  : "+obj.operation(a,b));
         
         obj = (a1,b1)->(a1*b1);
         System.out.println("Mul  : "+obj.operation(a,b));
         
    }
}