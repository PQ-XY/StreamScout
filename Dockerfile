# Use Tomcat 9.0.104 with JDK 21
FROM tomcat:9.0.104-jdk21

MAINTAINER yaoxu369@gmail.com

# Deploy WAR as ROOT so app is served at "/"
COPY ./jupiter.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080

CMD ["catalina.sh", "run"]
