// program showing the concept of lambda expression
import java.util.Scanner;
@FunctionalInterface
interface Operation
{
    void operation();
}
class Lambda3{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        Operation obj = ()->{
                System.out.println("Enter values of a and b : ");
                int a = sc.nextInt();
                int b = sc.nextInt();
                System.out.println("Sum  : "+(a+b));
            };
        obj.operation();
    }
}