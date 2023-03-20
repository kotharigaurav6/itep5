// program showing the concept of command line argument

class Command1
{
    public static void main(String args[])
    {
        System.out.println("length : "+args.length);
        for(String s : args)
        {
            System.out.println("ELEMENT : "+s);
        }
    }
}