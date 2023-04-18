// program showing the concept of Method Reference
import java.util.Scanner;
//@FunctionalInterface
interface Operation
{
    void operation();
}
class Reference1{
    static void myFun(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Sum : "+(a+b));
    }
    public static void main(String args[]){
        Operation obj = Reference1::myFun;
        obj.operation();
    }
}