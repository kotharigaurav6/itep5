// program showing the concept of constructor chaining

class Student
{
    int rno;
    double per;
    String name;

        Student(){
            this(101);
            System.out.println("default constructor called");
        }
        Student(int rno)
        {
            this(rno,56.67);
        }        
        Student(int rno,double per)
        {
            this(rno,per,"Andrew Anderson");
        }
        Student(int rno,double per,String name)
        {
            this.rno=rno;
            this.per=per;
            this.name=name;
                display();
        }
        void display()
        {
            System.out.println("Roll Number : "+rno);
            System.out.println("Percentage : "+per);
            System.out.println("Name : "+name);
        }
}
class CDemo10
{
    public static void main(String args[])
    {
        Student s = new Student();
    }
}