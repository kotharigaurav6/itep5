// program showing the concept of method overloading
class Greater
{
    void greater(int a,int b)
    {
        int res = a>b ? a : b;
        System.out.println("Greater number : "+res);
    }
    void greater(int a,int b,int c)
    {
        int res = a>b ? (a>c?a:c) : (b>c?b:c);
        System.out.println("Greater number : "+res);
    }
}
class Overload2
{
    public static void main(String args[])
    {
        Greater obj = new Greater();
        obj.greater(45,56);
        obj.greater(43,34,89);
    }
}