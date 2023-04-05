// program showing the concept of method overloading
class Greater
{
    double greater(int a,double b)
    {
        double res = a>b ? a : b;
        return res;
    }
    double greater(double a,int b)
    {
        double res = a>b ? a : b;
        return res;
    }
}
class Overload6
{
    public static void main(String args[])
    {
        Greater obj = new Greater();
        System.out.println("Greater number : "+obj.greater(45,5.6));
        System.out.println("Greater number : "+obj.greater(4.5,2));
    }
}