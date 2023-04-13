// program showing the concept of Nested class in java (non-static nested class | Inner class | Anonymous Class)
class NDemo14{
    void display()
    {
        System.out.println("statement 1");
    }
    public static void main(String args[]){
        NDemo14 obj = new NDemo14(){
            void display()
            {
                super.display();
                System.out.println("statement 2");
            }            
        };
     }
}