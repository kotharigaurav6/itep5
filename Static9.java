// program showing the concept of static keyword
import java.util.Scanner;
class Student
{
    static String cname;
    int id;
    double per;

        Student(int id,double per)
        {
            this.id=id;
            this.per=per;
        }
        static void getCollegeName()
        {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter college name : ");
            cname = sc.nextLine();
        }
        void display()
        {
            System.out.println(id+"\t"+per+"\t"+cname);
        }
}
class Static9
{
    public static void main(String args[])
    {   
        Static8.main(new String[]{"abc","xyz"});
        Student.getCollegeName();
        Student s1 = new Student(101,56.67);
        Student s2 = new Student(102,34.78);
            s1.display();
            s2.display();
    }
}





