import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Matches, IsEmail, IsBoolean } from 'class-validator';

@Entity({
    name: "school_users"
})
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;
    @Column()
    groups: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column("varchar")
    @IsEmail()
    email: string;
    @Column("varchar")
    first_name: string;
    @Column("text")
    lastname: string;
    @Column()
    @Matches(/[M]|[F]/)
    gender: 'M' | 'F';
    @Column({
        type: "varchar",
        length: 255
    })
    photo: string;
    @Column("date")
    birthday: Date;
    @Column("datetime")
    add_time: Date;
    @Column()
    @IsBoolean()
    status: boolean;
}