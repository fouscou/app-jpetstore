FROM openjdk:11

LABEL io.k8s.display-name="Jpetstore" \
      io.k8s.description="A web java application" \
      io.openshift.expose-services="8080:http" \
      io.openshift.tags="java, web"

EXPOSE 8080

WORKDIR /app/

#RUN chgrp -R 0 /app/ && \
#    chmod -R g=u /app/

COPY mybatis-spring-boot-jpetstore-2.0.0-SNAPSHOT.jar /app/ 

#USER 1001

CMD ["java", "-jar", "mybatis-spring-boot-jpetstore-2.0.0-SNAPSHOT.jar"]
