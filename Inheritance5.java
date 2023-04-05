// program showing the concept of hierarchical inheritance
import java.util.Scanner;
class Person
{
    int age;
    String name;
        void getDetails(){
            Scanner sc = new Scanner(System.in);
            
            System.out.println("Enter name : ");
            name = sc.nextLine();

            System.out.println("Enter Age : ");
            age = sc.nextInt();
        }
        void showDetails(){
            System.out.println("\nName : "+name+"\nAge : "+age);
        }
}
class Student extends Person
{
    int fees;
    String course;
        void getStudDetails(){
            getDetails();
            Scanner sc = new Scanner(System.in);
            
            System.out.println("Enter Course name : ");
            course = sc.nextLine();

            System.out.println("Enter Fees : ");
            fees = sc.nextInt();
        }
        void showStudDetails(){
            showDetails();
            System.out.println("\n\nCourse Name : "+course+"\nFees : "+fees);
        }
}
class Employee extends Person
{
    int sal;
    String desig;
        void getEmpDetails(){
            getDetails();
            Scanner sc = new Scanner(System.in);
            
            System.out.println("Enter Designation name : ");
            desig = sc.nextLine();

            System.out.println("Enter sal : ");
            sal = sc.nextInt();
        }
        void showEmpDetails(){
            showDetails();
            System.out.println("\n\nDesignation Name : "+desig+"\nSalary : "+sal);
        }
}

class Inheritance5{
    public static void main(String args[])
    {
        Student s = new Student();
        Employee e = new Employee();
            s.getStudDetails();
            e.getEmpDetails();

            s.showStudDetails();
            e.showEmpDetails();
    }
}