// program showing the concept of copy constructor 
import java.util.Scanner;
class Student
{
    int rno;
    double per;
    String name;
    Student(Student s1)
    {
        rno = s1.rno;
        per = s1.per;
        name = s1.name;
    }
    Student(int rno,double per,String name)
    {
        this.rno=rno;
        this.per=per;
        this.name=name;
    }
    void display()
    {
        System.out.println("Roll Number : "+rno);
        System.out.println("Percentage : "+per);
        System.out.println("Name : "+name);
    }
}
class CDemo21
{
    public static void main(String args[])
    {
        Student s1 = new Student(101,45.56,"Andrew Anderson");
        Student s2 = new Student(s1);
        s1.display();
        s2.display();
    }
}



