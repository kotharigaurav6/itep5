// program showing the concept of method overloading
class Overload9
{
    public static void main(int a,int b)
    {
        int res = a>b?a:b;
        System.out.println("Result : "+res);
    } 
    public static void main(double a,double b)
    {
        double res = a>b?a:b;
        System.out.println("Result : "+res);
    } 
    public static void main(String args[])
    {
        main(34,45);
        main(3.2,3.4);
    }
}