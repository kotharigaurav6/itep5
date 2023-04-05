// program showing the concept of method overloading
class Greater
{
    int greater(int a,int b)
    {
        int res = a>b ? a : b;
        System.out.println("int parameters");
        return res;
    }
    double greater(double a,double b)
    {
        double res = a>b ? a : b;
        System.out.println("double parameters");
        return res;
    }
}
class Overload7
{
    public static void main(String args[])
    {
        Greater obj = new Greater();
        System.out.println("Greater number : "+obj.greater(45,56));
        System.out.println("Greater number : "+obj.greater(4.5,2.45));
    }
}