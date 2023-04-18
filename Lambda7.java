// program showing the concept of lambda expression
@FunctionalInterface
interface Operation
{
    void operation(int...var);
}
class Lambda7{
    public static void main(String args[]){
        Operation obj;
         obj = (int...var)->{
            for(int v : var){
                System.out.print("\t"+v);
            }
            System.out.println();
         };
         obj.operation(12,23);        
         obj.operation(1,2,2,3);        
         obj.operation(12,23,2,3,4,5,6,7,8);        
    }
}