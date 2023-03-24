// program showing the concept of getter and setter methods
import java.util.Scanner;
class Getter_Setter2
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Roll number : ");
        int rno=sc.nextInt();
            sc.nextLine();
        System.out.println("Enter Name : ");
        String name=sc.nextLine();
        
        System.out.println("Enter Percentage : ");
        double per=sc.nextDouble();

        Student2 obj = new Student2();
        /* calling of setter methods */
            obj.setRno(rno);
            obj.setName(name);
            obj.setPer(per);
        /* calling of getter methods */
        System.out.println("Name : "+obj.getName()+"\nRoll Number : "+obj.getRno()+"\nPercentage : "+obj.getPer());

        Student2 obj1 = new Student2();
        System.out.println("\nName : "+obj1.getName()+"\nRoll Number : "+obj1.getRno()+"\nPercentage : "+obj1.getPer());
         
    }
}