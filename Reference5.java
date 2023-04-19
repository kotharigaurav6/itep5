// program showing the concept of Method Reference(Reference to an instance method)
import java.util.Scanner;
@FunctionalInterface
interface Operation
{
    int operation(int a,int b);
}
class Reference5{
    int myFun(int a,int b){
        return a+b;
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        Operation obj = new Reference5()::myFun;
        System.out.println("Sum : "+obj.operation(a,b));        
    }
}