// program showing the concept of copy constructor 
import java.util.Scanner;
class Student
{
    int rno;
    double per;
    String name;
    Student(){}
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
class CDemo20
{
    public static void main(String args[])
    {
        Student s1 = new Student(101,45.56,"Andrew Anderson");
        s1.display();
        Student s2 = new Student();
            s2.rno = s1.rno;
            s2.per = s1.per;
            s2.name = s1.name;
        s2.display();
    }
}



