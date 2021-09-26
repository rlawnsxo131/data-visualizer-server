import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn({ unsigned: true })
  id!: number;

  @Index()
  @Column()
  email!: string;

  @Index()
  @Column({ length: 16, nullable: true, default: null })
  username?: string;

  @Column({ length: 48 })
  display_name!: string;

  @Column({ length: 255, nullable: true, default: null })
  photo_url?: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;
}
