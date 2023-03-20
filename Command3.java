// program showing the concept of command line argument

class Command3
{
    public static void main(String args[])
    {
        System.out.println("length : "+args.length);
        // for(int i=args.length-1;i>=0;i--)
        // {
        //     System.out.print("\t"+args[i]);
        // }

        for(int i=0;i<args.length/2;i++)
        {
            String temp = args[i];
            args[i] = args[args.length-1-i];
            args[args.length-1-i] = temp;
        }    
        System.out.println("\nReverse Array\n");
        for(String s : args)
        {
            System.out.print("\t"+s);
        }
        System.out.println("\nres : "+(Integer.parseInt(args[0])==5));

    }
}