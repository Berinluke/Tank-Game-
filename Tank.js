class c_Tank
    {
        constructor(l_x, l_y )
        {
            this.tank_Base_Xpos=l_x;
            this.tank_Base_Ypos=l_y;
            this.tank_Base_Height=150;
            this.tank_Base_Width=150;
            
            this.Barrel_Width=50;
            this.Barrel_Height=100;
            
            this.Tank_Color="#a2b41c";
            this.Barrel_Color="#983122";
            this.Tank_Center_Knob="#918a8a";
            
            this.Center_Xpos = this.tank_Base_Xpos+(this.tank_Base_Width/2);
            this.Center_Ypos = this.tank_Base_Ypos+(this.tank_Base_Height/2);
            
            this.g_rotateSpeed=10;
            this.angle_deg=270;
            this.initial_velo=30;
            this.rotate_Left_flag=0;
            this.rotate_Right_flag=0;
            
            this.bullet=new c_Bullet(this.Center_Xpos, this.Center_Ypos, this.initial_velo );
        }
        
        
        m_draw_Tank(l_context)
        {
            this.bullet.m_draw_Bullet(l_context);
            
            //tank base
            l_context.fillStyle=this.Tank_Color;   
            l_context.fillRect(this.tank_Base_Xpos, this.tank_Base_Ypos, this.tank_Base_Width, this.tank_Base_Height);
            
            //barrel
             l_context.save();
            l_context.translate(this.Center_Xpos , this.Center_Ypos); 
            l_context.rotate(Math.PI*this.angle_deg/180); 
            l_context.fillStyle=this.Barrel_Color;
            l_context.fillRect(-(this.Barrel_Width/2), 0, this.Barrel_Width, this.Barrel_Height);
            l_context.restore();
            
            //barrel knob
            l_context.fillStyle=this.Tank_Center_Knob;
            l_context.beginPath();
            l_context.arc(this.Center_Xpos,this.Center_Ypos,this.Barrel_Width/2,0,2*Math.PI);
            l_context.fill();
            l_context.closePath();
           
              
        }
        
        m_Barrel_Rotation()
        {
           
                if(this.rotate_Left_flag==1)
                    {
                        this.angle_deg-=this.g_rotateSpeed;
                       
                        
                    }
                if(this.rotate_Right_flag==1)
                    {
                        this.angle_deg+=this.g_rotateSpeed;
                        
                        
                    }
             
            
        }
        m_Shoot_Bullet()
        {
            if(this.bullet.Start_animat_flag==0)
                {
                    
                    this.bullet.Fire_Bullet=this.angle_deg;
                   
                }
            
           if(this.angle_deg>=180 && this.angle_deg<200)
                {
                    this.bullet.initial_velocity++;
                    this.bullet.xSpeed-=0.2;
                }
            if(this.angle_deg>=200 && this.angle_deg<=250)
                {
                    
                    this.bullet.initial_velocity--;
                    this.bullet.xSpeed+=0.2;
                }
            if(this.angle>250 && this.angle<=270)
                {
                    this.bullet.initial_velocity-=2;
                    this.bullet.xSpeed-=2;
                }
            if(this.angle>270)
                {
                    this.bullet.initial_velocity=0;
                    this.bullet.xSpeed+=5;
                }
            console.log(this.bullet.Start_animat_flag);
        }
       
    }