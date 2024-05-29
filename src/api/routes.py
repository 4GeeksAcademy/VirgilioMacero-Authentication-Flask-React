"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import jwt_required,get_jwt_identity,create_access_token
from flask_bcrypt import generate_password_hash , check_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/token',methods=["POST"])
def create_token():
    email = request.json.get("email")
    password = request.json.get("password")

    print(email)

    user = User.query.filter_by(email=email).first()
    print(user)
    if user is None:
        # The user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 404
    
    if check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify({ "token": access_token, "user_id": user.id }),200
    else:
        return jsonify({"Error":"password incorrect"}),409

    
    


@api.route("/register",methods=["POST"])
def register():
    email = request.json.get("email")
    password = request.json.get("password")
    is_active = request.json.get("is_active")

    user = User.query.filter(User.email==email).first()

    print(user)

    if user != None:
        return jsonify({"message":"User already exist"}),400

    if email != None or password != None:

        hashed_password = generate_password_hash(password).decode('utf-8')

        db.session.add(User(email=email,password=hashed_password))
        db.session.commit()
        return jsonify({"message":"User created successfully"}),200
    
    return jsonify({"Error":"User or Password is not allocated"}),404

    
