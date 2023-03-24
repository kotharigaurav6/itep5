// program showing the concept of getter and setter methods
import java.util.Scanner;
class Student1 
{
    /* instance variable | data members */
    private int rno;
    private String name;
    private double per;

    /* setter methods */
        public void setRno(int rno)
        {
            this.rno=rno;
        }
        public void setName(String name)
        {
            this.name=name;
        }
        public void setPer(double per)
        {
            this.per=per;
        }
    /* getter methods */
        public int getRno()
        {
            return rno;
        }
        public String getName()
        {
            return name;
        }
        public double getPer()
        {
            return per;
        }
}
class Getter_Setter1
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

        Student1 obj = new Student1();
        /* calling of setter methods */
            obj.setRno(rno);
            obj.setName(name);
            obj.setPer(per);
        /* calling of getter methods */
        System.out.println("Name : "+obj.getName()+"\nRoll Number : "+obj.getRno()+"\nPercentage : "+obj.getPer());

        Student1 obj1 = new Student1();
        System.out.println("\nName : "+obj1.getName()+"\nRoll Number : "+obj1.getRno()+"\nPercentage : "+obj1.getPer());
         
    }
}