// program showing the concept of Initializer block
class Parent{
    Parent(){
        System.out.println("Parent class constructor called");
    }
}
class IDemo7 extends Parent
{
        static{
            System.out.println("static block");
        }
        {
            System.out.println("Initializer Block");
        }
        IDemo7(){            
            super();
            System.out.println("Child class Constructor");
        }
    public static void main(String args[])
    {
        IDemo7 obj = new IDemo7();
    }
}