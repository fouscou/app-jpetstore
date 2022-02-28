FROM centos:latest

LABEL io.k8s.display-name="Jpetstore" \
      io.k8s.description="A web java application" \
      io.openshift.expose-services="8080:http" \
      io.openshift.tags="java, web"

RUN yum -y update && \
    yum -y install java-1.8.0-openjdk

COPY mybatis-spring-boot-jpetstore-2.0.0-SNAPSHOT.jar /app/ 

WORKDIR /app/

EXPOSE 8080

CMD ["java", "-jar", "mybatis-spring-boot-jpetstore-2.0.0-SNAPSHOT.jar"]
