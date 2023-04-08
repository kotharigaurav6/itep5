// program showing the concept of abstract class
import java.util.Scanner;
abstract class Series
{
    abstract void series(int aa,int bb);
}
class OddSeries extends Series{
    void series(int n,int m)
    {
        System.out.println("Odd Number Series");
        for(int i=n;i<=m;i++)
        {
            if(i%2!=0)
                System.out.print("\t"+i);
        }
    }
} 
class EvenSeries extends Series{
    void series(int n,int m)
    {
        System.out.println("\nEven Number Series");
        for(int i=n;i<=m;i++)
        {
            if(i%2==0)
                System.out.print("\t"+i);
        }
    }
} 
class AbstractDemo4
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter initial and final value : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        Series obj;
            obj = new OddSeries();
                obj.series(a,b);
            obj = new EvenSeries();
                obj.series(a,b);
    }
}