// program showing the concept of Method Reference(Reference to a constructor)
import java.util.Scanner;
@FunctionalInterface
interface Operation
{
    void operation(int a,int b);
}
class Reference6{
    Reference6(int a,int b){
        System.out.println("Sum : "+(a+b));
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        Operation obj = Reference6::new;
        obj.operation(a,b);        
    }
}