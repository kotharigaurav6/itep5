// program showing the concept of Function
import java.util.Scanner;
class Fun5
{
    int getAge()
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Age : ");
        int age = sc.nextInt();
        return age;
    }    
    int getResult(char ch)
    {
        if(ch=='I' || ch=='i')
        {
            System.out.println("User is Indian");
            int age = getAge();
            if(age>=18)
                return 1;
            else
                return 2;
        }
        else
            return 0;
    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Nationality : ");
        char ch = sc.next().charAt(0);
        Fun5 obj = new Fun5();
        int i = obj.getResult(ch);
        if(i==0)
            System.out.println("Not an Indian");
        else if(i==1)
            System.out.println("Eligible to vote");
        else
            System.out.println("Not eligible to vote");
    }   
}