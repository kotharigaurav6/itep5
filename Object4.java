// program showing the concept of hashCode()
class Product{
    private int pid;
    private String name;
        public void setData(int pid,String name){
            this.pid=pid;
            this.name=name;
        }
        @Override
        public String toString(){
            return pid+"\t"+name;
        }    
        @Override
        public int hashCode(){
            return pid;
        }
}
class Object4{
    public static void main(String args[]){
        Product p1 = new Product();
            p1.setData(101,"Fairness Cream");
        Product p2 = new Product();
            p2.setData(102,"Soap");
        System.out.println("Product 1 : "+p1+" Hashcode : "+p1.hashCode());
        System.out.println("Product 2 : "+p2+" Hashcode : "+p2.hashCode());
    }
}