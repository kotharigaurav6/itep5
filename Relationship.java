// program showing the concept of is-a and has-a relationship

class Engine{
    int horsePower;    
    Engine(int hp){
        this.horsePower = hp;
    }
}
class Car{
    private int maxSpeed;
    private String color;
        public void setSpeed(int speed)
        {
            this.maxSpeed = speed;
        }
        public void setColor(String color)
        {
            this.color = color;
        }
        public void showInfo()
        {
            System.out.println("Max. Speed : "+maxSpeed+"\nColor : "+color);
        } 
}
class Maruti extends Car{
        Engine engine;
        Maruti(int speed,String color,Engine engine){
            setSpeed(speed);
            setColor(color);
            this.engine=engine;
                showInfo();
        }    
        void showHorsePower(){
            System.out.println("Horse Power : "+engine.horsePower);    
        }
}
class Relationship{
    public static void main(String args[]){
        Engine engine = new Engine(400);
        Maruti obj = new Maruti(100,"Blue",engine);
        obj.showHorsePower();
    }
}