// program showing the concept of toString method
class Student{
    private int id;
    private String email,password;
 
    public void setData(String email,String password,int id){
        this.email=email;
        this.password=password;
        this.id=id;
    }
    @Override
    public String toString(){
        return id+"\t"+email+"\t"+password;
    }
}
class Object2{
    public static void main(String args[]){
        Student obj = new Student();
        obj.setData("andrew@gmail.com","andrew@123",123);

        System.out.println("Details : "+obj);
        System.out.println("Details : "+obj.toString());
    }
}