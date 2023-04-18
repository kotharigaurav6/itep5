// program showing the concept of lambda expression
import java.util.Scanner;
@FunctionalInterface
interface Operation
{
    int operation(int a,int b);
}
class Lambda5{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
             
        Operation obj = (int a1,int b1)->{
                return a1+b1;
            };
        System.out.println("Sum  : "+obj.operation(a,b));
    }
}