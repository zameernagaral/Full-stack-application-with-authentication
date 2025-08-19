import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();
