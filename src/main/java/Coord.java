import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="checks")
public class Coord {
    
    public Coord(){
        x=new String();
        y=new String();
        r=new String();
        s=new String();
    }
    public Coord(String x,String y,String r,String s){
        setX(x);
        setY(y);
        setR(r);
        setS(s);
    }
    @Id
    @GeneratedValue
    protected Long id;
    @Column(name="x")
    String x;
    @Column(name="y")
    String y;
    @Column(name="r")
    String r;
    @Column(name="message")
    String s;
    public void setS(String str) {
        s=str;
    }
    public String getS() {
        return s;
    }
    public void setR(String str) {
        r=str;
    }
    public String getR() {
        return r;
    }
    public void setY(String str) {
        y=str;
    }
    public String getY() {
        return y;
    }
    public void setX(String str) {
        x=str;
    }
    public String getX() {
        return x;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
}
