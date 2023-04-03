// program showing the concept of Initializer block
class IDemo6
{
        static{
            System.out.println("static block");
        }
        {
            System.out.println("Initializer Block");
        }
        IDemo6(){            
            // control goes to initializer block    
            System.out.println("Constructor");
        }
    public static void main(String args[])
    {
        IDemo6 obj = new IDemo6();
    }
}