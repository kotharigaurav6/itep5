// program showing the concept of constructor chaining

class Student
{
    int rno;
    double per;
    String name;

        Student(){
            System.out.println("default constructor called");
        }
        Student(int rno)
        {
            this();
            System.out.println("Roll number : "+rno);
        }        
}
class CDemo11
{
    public static void main(String args[])
    {
        Student s = new Student(101);
    }
}