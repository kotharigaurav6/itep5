class Address
{
    String city,state;

    Address(String city,String state)
    {
        this.city=city;
        this.state=state;
    }
    Address(Address p)
    {
        this.city = p.city;
        this.state = p.state;
    }
}