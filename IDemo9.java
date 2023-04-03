// program showing the concept of Initializer block
class IDemo9
{
    final int rno;
    static double per;
    String name;
        {
            rno = 100;
            name = "Andrew Anderson";
            per = 40.34;
        }
    IDemo9()
    {
//        per = 40.34;
        System.out.println("Roll Number : "+rno);
        System.out.println("Percentage : "+per);
        System.out.println("Name : "+name);
    }
    public static void main(String args[])
    {
        IDemo9 obj = new IDemo9();
    }
}