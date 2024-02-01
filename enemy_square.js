class c_Enemy
    {
        constructor(l_x,l_y)
        {
            this.Enemy_Xpos=l_x;
            this.Enemy_Ypos=l_y;
            this.Enemy_Width=100;
            this.Enemy_Height=100;
            this.Movement_Speed=1;
        }
        m_draw_Enemy(l_context)
        {
            l_context.fillStyle="#000000";
            l_context.fillRect(this.Enemy_Xpos, this.Enemy_Ypos, this.Enemy_Width, this.Enemy_Height);
        }
        m_Enemy_movement()
        {
            this.Enemy_Xpos-=this.Movement_Speed;
        }
       
       
    }