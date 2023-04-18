// program showing the concept of lambda expression
import java.util.Scanner;
@FunctionalInterface
interface Operation
{
    void operation(int a,int b);
}
class Lambda4{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
             
        Operation obj = (int a1,int b1)->{
                System.out.println("Sum  : "+(a1+b1));
            };
        obj.operation(a,b);
    }
}