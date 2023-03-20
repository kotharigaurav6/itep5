// program showing the concept of command line argument

class Command2
{
    public static void main(String args[])
    {
        System.out.println("length : "+args.length);
        int sum=0;
        for(String s : args)
        {
            sum=sum+Integer.parseInt(s);
        }
        System.out.println("sum : "+sum);
    }
}