window.flashcardsData = [
  {
    "front": "Define: System of Linear Equations",
    "back": "A system of linear equations is a collection of \\(m\\) equations in the variable quantities \\(x_1,\\,x_2,\\,x_3,\\ldots,x_n\\) of the form,\n\n\\begin{align*}\na_{11}x_1+a_{12}x_2+a_{13}x_3+\\dots+a_{1n}x_n&=b_1\\\\\na_{21}x_1+a_{22}x_2+a_{23}x_3+\\dots+a_{2n}x_n&=b_2\\\\\na_{31}x_1+a_{32}x_2+a_{33}x_3+\\dots+a_{3n}x_n&=b_3\\\\\n&\\vdots\\\\\na_{m1}x_1+a_{m2}x_2+a_{m3}x_3+\\dots+a_{mn}x_n&=b_m\n\\end{align*}\n\nwhere the values of \\(a_{ij}\\text{,}\\) \\(b_i\\) and \\(x_j\\text{,}\\) \\(1\\leq i\\leq m\\text{,}\\) \\(1\\leq j\\leq n\\text{,}\\) are from the set of complex numbers, \\(\\complexes\\text{.}\\)",
    "type": "Definition",
    "title": "System of Linear Equations",
    "section": "SSLE",
    "section_title": "Solving Systems of Linear Equations",
    "category": "Definition"
  },
  {
    "front": "Define: Solution of a System of Linear Equations",
    "back": "A solution of a system of linear equations in \\(n\\) variables, \\(\\scalarlist{x}{n}\\) (such as the system given in Definition SLE ), is an ordered list of \\(n\\) complex numbers, \\(\\scalarlist{s}{n}\\) such that if we substitute \\(s_1\\) for \\(x_1\\text{,}\\) \\(s_2\\) for \\(x_2\\text{,}\\) \\(s_3\\) for \\(x_3\\text{,}\\) …, \\(s_n\\) for \\(x_n\\text{,}\\)  then for every equation of the system the left side will equal the right side, i.e. each equation is true simultaneously.",
    "type": "Definition",
    "title": "Solution of a System of Linear Equations",
    "section": "SSLE",
    "section_title": "Solving Systems of Linear Equations",
    "category": "Definition"
  },
  {
    "front": "Define: Solution Set of a System of Linear Equations",
    "back": "The solution set of a linear system of equations is the set which contains every solution to the system, and nothing more.",
    "type": "Definition",
    "title": "Solution Set of a System of Linear Equations",
    "section": "SSLE",
    "section_title": "Solving Systems of Linear Equations",
    "category": "Definition"
  },
  {
    "front": "Define: Equivalent Systems",
    "back": "Two systems of linear equations are equivalent if their solution sets are equal.",
    "type": "Definition",
    "title": "Equivalent Systems",
    "section": "SSLE",
    "section_title": "Solving Systems of Linear Equations",
    "category": "Definition"
  },
  {
    "front": "Define: Equation Operations",
    "back": "Given a system of linear equations, the following three operations will transform the system into a different one, and each operation is known as an equation operation .",
    "type": "Definition",
    "title": "Equation Operations",
    "section": "SSLE",
    "section_title": "Solving Systems of Linear Equations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Equation Operations Preserve Solution Sets",
    "back": "If we apply one of the three equation operations of Definition EO to a system of linear equations  ( Definition SLE ), then the original system and the transformed system are equivalent.",
    "type": "Theorem",
    "title": "Equation Operations Preserve Solution Sets",
    "section": "SSLE",
    "section_title": "Solving Systems of Linear Equations",
    "category": "Theorem"
  },
  {
    "front": "Define: Matrix",
    "back": "An \\(m\\times n\\) matrix is a rectangular layout of numbers from \\(\\complexes\\) having \\(m\\) rows and \\(n\\) columns.  We will use upper-case Latin letters from the start of the alphabet (\\(A,\\,B,\\,C,\\dotsc\\)) to denote matrices and squared-off brackets to delimit the layout.  Many use large parentheses instead of brackets — the distinction is not important.  Rows of a matrix will be referenced starting at the top and working down (i.e. row 1 is at the top) and columns will be referenced starting from the left (i.e. column 1 is at the left).  For a matrix \\(A\\text{,}\\) the notation \\(\\matrixentry{A}{ij}\\) will refer to the complex number in row \\(i\\) and column \\(j\\) of \\(A\\text{.}\\)",
    "type": "Definition",
    "title": "Matrix",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "Define: Column Vector",
    "back": "A column vector of size \\(m\\) is an ordered list of \\(m\\) numbers, which is written in order vertically, starting at the top and proceeding to the bottom.  At times, we will refer to a column vector as simply a vector .  Column vectors will be written in bold, usually with lower case Latin letter from the end of the alphabet such as \\(\\vect{u}\\text{,}\\) \\(\\vect{v}\\text{,}\\) \\(\\vect{w}\\text{,}\\) \\(\\vect{x}\\text{,}\\) \\(\\vect{y}\\text{,}\\) \\(\\vect{z}\\text{.}\\)  Some books like to write vectors with arrows, such as \\(\\vec{u}\\text{.}\\)  Writing by hand, some like to put arrows on top of the symbol, or a tilde underneath the symbol, as in \\(\\underset{\\sim}{\\textstyle u}\\text{.}\\)  To refer to the entry or component of vector \\(\\vect{v}\\) in location \\(i\\) of the list, we write \\(\\vectorentry{\\vect{v}}{i}\\text{.}\\)",
    "type": "Definition",
    "title": "Column Vector",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "Define: Zero Column Vector",
    "back": "The zero vector of size \\(m\\) is the column vector of size \\(m\\) where each entry is the number zero,\n\n\\begin{gather*}\n\\zerovector=\\colvector{0\\\\0\\\\0\\\\\\vdots\\\\0}\n\\end{gather*}\n\nor defined much more compactly, \\(\\vectorentry{\\zerovector}{i}=0\\) for \\(1\\leq i\\leq m\\text{.}\\)",
    "type": "Definition",
    "title": "Zero Column Vector",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "Define: Coefficient Matrix",
    "back": "For a system of linear equations,\n\n\\begin{align*}\na_{11}x_1+a_{12}x_2+a_{13}x_3+\\dots+a_{1n}x_n&=b_1\\\\\na_{21}x_1+a_{22}x_2+a_{23}x_3+\\dots+a_{2n}x_n&=b_2\\\\\na_{31}x_1+a_{32}x_2+a_{33}x_3+\\dots+a_{3n}x_n&=b_3\\\\\n\\vdots&\\\\\na_{m1}x_1+a_{m2}x_2+a_{m3}x_3+\\dots+a_{mn}x_n&=b_m\n\\end{align*}\n\nthe coefficient matrix is the \\(m\\times n\\) matrix\n\n\\begin{equation*}\nA=\n\\begin{bmatrix}\na_{11}&a_{12}&a_{13}&\\dots&a_{1n}\\\\\na_{21}&a_{22}&a_{23}&\\dots&a_{2n}\\\\\na_{31}&a_{32}&a_{33}&\\dots&a_{3n}\\\\\n\\vdots&\\vdots&\\vdots&     &\\vdots\\\\\na_{m1}&a_{m2}&a_{m3}&\\dots&a_{mn}\\\\\n\\end{bmatrix}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Coefficient Matrix",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "Define: Vector of Constants",
    "back": "For a system of linear equations,\n\n\\begin{align*}\na_{11}x_1+a_{12}x_2+a_{13}x_3+\\dots+a_{1n}x_n&=b_1\\\\\na_{21}x_1+a_{22}x_2+a_{23}x_3+\\dots+a_{2n}x_n&=b_2\\\\\na_{31}x_1+a_{32}x_2+a_{33}x_3+\\dots+a_{3n}x_n&=b_3\\\\\n\\vdots&\\\\\na_{m1}x_1+a_{m2}x_2+a_{m3}x_3+\\dots+a_{mn}x_n&=b_m\n\\end{align*}\n\nthe vector of constants is the column vector of size \\(m\\)\n\n\\begin{equation*}\n\\vect{b}=\n\\begin{bmatrix}\nb_1\\\\\nb_2\\\\\nb_3\\\\\n\\vdots\\\\\nb_m\\\\\n\\end{bmatrix}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Vector of Constants",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "Define: Solution Vector",
    "back": "For a system of linear equations,\n\n\\begin{align*}\na_{11}x_1+a_{12}x_2+a_{13}x_3+\\dots+a_{1n}x_n&=b_1\\\\\na_{21}x_1+a_{22}x_2+a_{23}x_3+\\dots+a_{2n}x_n&=b_2\\\\\na_{31}x_1+a_{32}x_2+a_{33}x_3+\\dots+a_{3n}x_n&=b_3\\\\\n\\vdots&\\\\\na_{m1}x_1+a_{m2}x_2+a_{m3}x_3+\\dots+a_{mn}x_n&=b_m\n\\end{align*}\n\nthe solution vector is the column vector of size \\(n\\)\n\n\\begin{equation*}\n\\vect{x}=\n\\begin{bmatrix}\nx_1\\\\\nx_2\\\\\nx_3\\\\\n\\vdots\\\\\nx_n\\\\\n\\end{bmatrix}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Solution Vector",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "Define: Matrix Representation of a Linear System",
    "back": "If \\(A\\) is the coefficient matrix of a system of linear equations and \\(\\vect{b}\\) is the vector of constants, then we will write \\(\\linearsystem{A}{\\vect{b}}\\) as a shorthand expression for the  system of linear equations, which we will refer to as the matrix representation of the linear system.",
    "type": "Definition",
    "title": "Matrix Representation of a Linear System",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "Define: Augmented Matrix",
    "back": "Suppose we have a system of \\(m\\) equations in \\(n\\) variables, with coefficient matrix \\(A\\) and vector of constants \\(\\vect{b}\\text{.}\\)  Then the augmented matrix of the system of equations is the \\(m\\times(n+1)\\) matrix whose first \\(n\\) columns are the columns of \\(A\\) and whose last column (\\(n+1\\)) is the column vector \\(\\vect{b}\\text{.}\\)  When described symbolically, this matrix will be written as \\(\\augmented{A}{\\vect{b}}\\text{.}\\)",
    "type": "Definition",
    "title": "Augmented Matrix",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "Define: Row Operations",
    "back": "The following three operations will transform an \\(m\\times n\\) matrix into a different matrix of the same size, and each is known as a row operation .\n\nWe will use a symbolic shorthand to describe these row operations.",
    "type": "Definition",
    "title": "Row Operations",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "Define: Row-Equivalent Matrices",
    "back": "Two matrices, \\(A\\) and \\(B\\text{,}\\) are row-equivalent if one can be obtained from the other by a sequence of row operations.",
    "type": "Definition",
    "title": "Row-Equivalent Matrices",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Row-Equivalent Matrices represent Equivalent Systems",
    "back": "Suppose that \\(A\\) and \\(B\\) are row-equivalent augmented matrices.  Then the two systems of linear equations represented by \\(A\\) and \\(B\\) are equivalent systems.",
    "type": "Theorem",
    "title": "Row-Equivalent Matrices represent Equivalent Systems",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Theorem"
  },
  {
    "front": "Define: Reduced Row-Echelon Form",
    "back": "A matrix is in reduced row-echelon form if it meets all of the following conditions:\n\nA row of only zero entries is called a zero row and the leftmost nonzero entry of a nonzero row is a leading 1 .  A column containing a leading 1 will be called a pivot column .  The number of nonzero rows will be denoted by \\(r\\text{,}\\) which is also equal to the number of leading 1's and the number of pivot columns.\n\nThe set of column indices for the pivot columns will be denoted by \\(D=\\set{d_1,\\,d_2,\\,d_3,\\,\\ldots,\\,d_r}\\) where \\(d_1\\lt d_2\\lt d_3\\lt\\cdots\\lt d_r\\text{,}\\) while the columns that are not pivot columns will be denoted as \\(F=\\set{f_1,\\,f_2,\\,f_3,\\,\\ldots,\\,f_{n-r}}\\) where \\(f_1\\lt f_2\\lt f_3\\lt\\cdots\\lt f_{n-r}\\text{.}\\)",
    "type": "Definition",
    "title": "Reduced Row-Echelon Form",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Row-Equivalent Matrix in Echelon Form",
    "back": "Suppose \\(A\\) is a matrix.  Then there is a matrix \\(B\\) so that",
    "type": "Theorem",
    "title": "Row-Equivalent Matrix in Echelon Form",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Reduced Row-Echelon Form is Unique",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix and that \\(B\\) and \\(C\\) are \\(m\\times n\\) matrices that are row-equivalent to \\(A\\) and in reduced row-echelon form.  Then \\(B=C\\text{.}\\)",
    "type": "Theorem",
    "title": "Reduced Row-Echelon Form is Unique",
    "section": "RREF",
    "section_title": "Reduced Row-Echelon Form",
    "category": "Theorem"
  },
  {
    "front": "Define: Consistent System",
    "back": "A system of linear equations is consistent if it has at least one solution.  Otherwise, the system is called inconsistent .",
    "type": "Definition",
    "title": "Consistent System",
    "section": "TSS",
    "section_title": "Types of Solution Sets",
    "category": "Definition"
  },
  {
    "front": "Define: Independent and Dependent Variables",
    "back": "Suppose \\(A\\) is the augmented matrix of a consistent system of linear equations and \\(B\\) is a row-equivalent matrix in reduced row-echelon form.  Suppose \\(j\\) is the index of a pivot column of \\(B\\text{.}\\)  Then the variable \\(x_j\\) is dependent .  A variable that is not dependent is called independent or free .",
    "type": "Definition",
    "title": "Independent and Dependent Variables",
    "section": "TSS",
    "section_title": "Types of Solution Sets",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Recognizing Consistency of a Linear System",
    "back": "Suppose \\(A\\) is the augmented matrix of a system of linear equations with \\(n\\) variables.  Suppose also that \\(B\\) is a row-equivalent matrix in reduced row-echelon form with \\(r\\) nonzero rows.  Then the system of equations is inconsistent if and only if column \\(n+1\\) of \\(B\\) is a pivot column.",
    "type": "Theorem",
    "title": "Recognizing Consistency of a Linear System",
    "section": "TSS",
    "section_title": "Types of Solution Sets",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Consistent Systems, \\(r\\) and \\(n\\)",
    "back": "Suppose \\(A\\) is the augmented matrix of a consistent system of linear equations with \\(n\\) variables.  Suppose also that \\(B\\) is a row-equivalent matrix in reduced row-echelon form with \\(r\\) pivot columns.  Then \\(r\\leq n\\text{.}\\)  If \\(r=n\\text{,}\\) then the system has a unique solution, and if \\(r\\lt n\\text{,}\\) then the system has infinitely many solutions.",
    "type": "Theorem",
    "title": "Consistent Systems, \\(r\\) and \\(n\\)",
    "section": "TSS",
    "section_title": "Types of Solution Sets",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Free Variables for Consistent Systems",
    "back": "Suppose \\(A\\) is the augmented matrix of a consistent system of linear equations with \\(n\\) variables.  Suppose also that \\(B\\) is a row-equivalent matrix in reduced row-echelon form with \\(r\\) pivot columns.  Then the solution set can be described with \\(n-r\\) free variables.",
    "type": "Theorem",
    "title": "Free Variables for Consistent Systems",
    "section": "TSS",
    "section_title": "Types of Solution Sets",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Possible Solution Sets for Linear Systems",
    "back": "A system of linear equations has no solutions, a unique solution or infinitely many solutions.",
    "type": "Theorem",
    "title": "Possible Solution Sets for Linear Systems",
    "section": "TSS",
    "section_title": "Types of Solution Sets",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Consistent, More Variables than Equations, Infinite solutions",
    "back": "Suppose a consistent system of linear equations has \\(m\\) equations in \\(n\\) variables.  If \\(n\\gt m\\text{,}\\) then the system has infinitely many solutions.",
    "type": "Theorem",
    "title": "Consistent, More Variables than Equations, Infinite solutions",
    "section": "TSS",
    "section_title": "Types of Solution Sets",
    "category": "Theorem"
  },
  {
    "front": "Define: Homogeneous System",
    "back": "A system of linear equations, \\(\\linearsystem{A}{\\vect{b}}\\) is homogeneous if the vector of constants is the zero vector, in other words, if \\(\\vect{b}=\\zerovector\\text{.}\\)",
    "type": "Definition",
    "title": "Homogeneous System",
    "section": "HSE",
    "section_title": "Homogeneous Systems of Equations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Homogeneous Systems are Consistent",
    "back": "Suppose that a system of linear equations is homogeneous.  Then the system is consistent and one solution is found by setting each variable to zero.",
    "type": "Theorem",
    "title": "Homogeneous Systems are Consistent",
    "section": "HSE",
    "section_title": "Homogeneous Systems of Equations",
    "category": "Theorem"
  },
  {
    "front": "Define: Trivial Solution to Homogeneous Systems of Equations",
    "back": "Suppose a homogeneous system of linear equations has \\(n\\) variables.  The solution \\(x_1=0\\text{,}\\) \\(x_2=0\\text{,}\\) …, \\(x_n=0\\) (i.e. \\(\\vect{x}=\\zerovector\\)) is called the trivial solution .",
    "type": "Definition",
    "title": "Trivial Solution to Homogeneous Systems of Equations",
    "section": "HSE",
    "section_title": "Homogeneous Systems of Equations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Homogeneous, More Variables than Equations, Infinite solutions",
    "back": "Suppose that a homogeneous system of linear equations has \\(m\\) equations and \\(n\\) variables with \\(n\\gt m\\text{.}\\)  Then the system has infinitely many solutions.",
    "type": "Theorem",
    "title": "Homogeneous, More Variables than Equations, Infinite solutions",
    "section": "HSE",
    "section_title": "Homogeneous Systems of Equations",
    "category": "Theorem"
  },
  {
    "front": "Define: Null Space of a Matrix",
    "back": "The null space of a matrix \\(A\\text{,}\\) denoted \\(\\nsp{A}\\text{,}\\) is the set of all the vectors that are solutions to the homogeneous system \\(\\homosystem{A}\\text{.}\\)",
    "type": "Definition",
    "title": "Null Space of a Matrix",
    "section": "HSE",
    "section_title": "Homogeneous Systems of Equations",
    "category": "Definition"
  },
  {
    "front": "Define: Square Matrix",
    "back": "A matrix with \\(m\\) rows and \\(n\\) columns is square if \\(m=n\\text{.}\\)  In this case, we say the matrix has size \\(n\\text{.}\\)  To emphasize the situation when a matrix is not square, we will call it rectangular .",
    "type": "Definition",
    "title": "Square Matrix",
    "section": "NM",
    "section_title": "Nonsingular Matrices",
    "category": "Definition"
  },
  {
    "front": "Define: Nonsingular Matrix",
    "back": "Suppose \\(A\\) is a square matrix.  Suppose further that the solution set to the homogeneous linear system of equations \\(\\linearsystem{A}{\\zerovector}\\) is \\(\\set{\\zerovector}\\text{,}\\) in other words, the system has only the trivial solution.  Then we say that \\(A\\) is a nonsingular matrix.  Otherwise we say \\(A\\) is a singular matrix.",
    "type": "Definition",
    "title": "Nonsingular Matrix",
    "section": "NM",
    "section_title": "Nonsingular Matrices",
    "category": "Definition"
  },
  {
    "front": "Define: Identity Matrix",
    "back": "The \\(m\\times m\\) identity matrix , \\(I_m\\text{,}\\) is defined by\n\n\\begin{align*}\n\\matrixentry{I_m}{ij}&=\n\\begin{cases}\n1 & \\text{if }i=j\\\\\n0 & \\text{if }i\\neq j\n\\end{cases}\n\\end{align*}\n\nfor \\(1\\leq i,\\,j\\leq m\\text{.}\\)",
    "type": "Definition",
    "title": "Identity Matrix",
    "section": "NM",
    "section_title": "Nonsingular Matrices",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Nonsingular Matrices Row Reduce to the Identity",
    "back": "Suppose that \\(A\\) is a square matrix and \\(B\\) is a row-equivalent matrix in reduced row-echelon form.  Then \\(A\\) is nonsingular if and only if \\(B\\) is the identity matrix.",
    "type": "Theorem",
    "title": "Nonsingular Matrices Row Reduce to the Identity",
    "section": "NM",
    "section_title": "Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrices have Trivial Null Spaces",
    "back": "Suppose that \\(A\\) is a square matrix.  Then \\(A\\) is nonsingular if and only if the null space of \\(A\\) is the set containing only the zero vector, i.e. \\(\\nsp{A}=\\set{\\zerovector}\\text{.}\\)",
    "type": "Theorem",
    "title": "Nonsingular Matrices have Trivial Null Spaces",
    "section": "NM",
    "section_title": "Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrices and Unique Solutions",
    "back": "Suppose that \\(A\\) is a square matrix.  \\(A\\) is a nonsingular matrix if and only if the system \\(\\linearsystem{A}{\\vect{b}}\\) has a unique solution for every choice of the constant vector \\(\\vect{b}\\text{.}\\)",
    "type": "Theorem",
    "title": "Nonsingular Matrices and Unique Solutions",
    "section": "NM",
    "section_title": "Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrix Equivalences, Round 1",
    "back": "Suppose that \\(A\\) is a square matrix.  The following are equivalent.",
    "type": "Theorem",
    "title": "Nonsingular Matrix Equivalences, Round 1",
    "section": "NM",
    "section_title": "Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "Define: Vector Space of Column Vectors",
    "back": "The vector space \\(\\complex{m}\\) is the set of all column vectors ( Definition CV ) of size \\(m\\) with entries from the set of complex numbers, \\(\\complexes\\text{.}\\)",
    "type": "Definition",
    "title": "Vector Space of Column Vectors",
    "section": "VO",
    "section_title": "Vector Operations",
    "category": "Definition"
  },
  {
    "front": "Define: Column Vector Equality",
    "back": "Suppose that \\(\\vect{u},\\,\\vect{v}\\in\\complex{m}\\text{.}\\)  Then \\(\\vect{u}\\) and \\(\\vect{v}\\) are equal , written \\(\\vect{u}=\\vect{v}\\) if\n\n\\begin{gather*}\n\\vectorentry{\\vect{u}}{i}=\\vectorentry{\\vect{v}}{i}\n\\end{gather*}\n\nfor all \\(1\\leq i\\leq m\\text{.}\\)",
    "type": "Definition",
    "title": "Column Vector Equality",
    "section": "VO",
    "section_title": "Vector Operations",
    "category": "Definition"
  },
  {
    "front": "Define: Column Vector Addition",
    "back": "Suppose that \\(\\vect{u},\\,\\vect{v}\\in\\complex{m}\\text{.}\\) The sum of \\(\\vect{u}\\) and \\(\\vect{v}\\) is the vector \\(\\vect{u}+\\vect{v}\\) defined by\n\n\\begin{gather*}\n\\vectorentry{\\vect{u}+\\vect{v}}{i}=\\vectorentry{\\vect{u}}{i}+\\vectorentry{\\vect{v}}{i}\n\\end{gather*}\n\nfor \\(1\\leq i\\leq m\\text{.}\\)",
    "type": "Definition",
    "title": "Column Vector Addition",
    "section": "VO",
    "section_title": "Vector Operations",
    "category": "Definition"
  },
  {
    "front": "Define: Column Vector Scalar Multiplication",
    "back": "Suppose \\(\\vect{u}\\in\\complex{m}\\) and \\(\\alpha\\in\\complexes\\text{,}\\) then the scalar multiple of \\(\\vect{u}\\) by \\(\\alpha\\) is the vector \\(\\alpha\\vect{u}\\) defined by\n\n\\begin{gather*}\n\\vectorentry{\\alpha\\vect{u}}{i}=\\alpha\\vectorentry{\\vect{u}}{i}\n\\end{gather*}\n\nfor \\(1\\leq i\\leq m\\text{.}\\)",
    "type": "Definition",
    "title": "Column Vector Scalar Multiplication",
    "section": "VO",
    "section_title": "Vector Operations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Vector Space Properties of Column Vectors",
    "back": "Suppose that \\(\\complex{m}\\) is the set of column vectors of size \\(m\\) ( Definition VSCV ) with addition and scalar multiplication as defined in Definition CVA and Definition CVSM .  Then",
    "type": "Theorem",
    "title": "Vector Space Properties of Column Vectors",
    "section": "VO",
    "section_title": "Vector Operations",
    "category": "Theorem"
  },
  {
    "front": "Define: Linear Combination of Column Vectors",
    "back": "Given \\(n\\) vectors \\(\\vectorlist{u}{n}\\) from \\(\\complex{m}\\) and \\(n\\) scalars \\(\\alpha_1,\\,\\alpha_2,\\,\\alpha_3,\\,\\ldots,\\,\\alpha_n\\text{,}\\) their linear combination is the vector\n\n\\begin{equation*}\n\\lincombo{\\alpha}{u}{n}\n\\end{equation*}",
    "type": "Definition",
    "title": "Linear Combination of Column Vectors",
    "section": "LC",
    "section_title": "Linear Combinations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Solutions to Linear Systems are Linear Combinations",
    "back": "Denote the columns of the \\(m\\times n\\) matrix \\(A\\) as the vectors \\(\\vectorlist{A}{n}\\text{.}\\)  Then \\(\\vect{x}\\in\\complex{n}\\) is a solution to the linear system of equations \\(\\linearsystem{A}{\\vect{b}}\\) if and only if \\(\\vect{b}\\) equals the linear combination of the columns of \\(A\\) formed with the entries of \\(\\vect{x}\\text{,}\\)\n\n\\begin{equation*}\n\\vectorentry{\\vect{x}}{1}\\vect{A}_1+\n\\vectorentry{\\vect{x}}{2}\\vect{A}_2+\n\\vectorentry{\\vect{x}}{3}\\vect{A}_3+\n\\cdots+\n\\vectorentry{\\vect{x}}{n}\\vect{A}_n\n=\n\\vect{b}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Solutions to Linear Systems are Linear Combinations",
    "section": "LC",
    "section_title": "Linear Combinations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Vector Form of Solutions to Linear Systems",
    "back": "Suppose that \\(\\augmented{A}{\\vect{b}}\\) is the augmented matrix for a consistent linear system \\(\\linearsystem{A}{\\vect{b}}\\) of \\(m\\) equations in \\(n\\) variables.  Let \\(B\\) be a row-equivalent \\(m\\times (n+1)\\) matrix in reduced row-echelon form.  Suppose that \\(B\\) has \\(r\\) pivot columns, with indices \\(D=\\set{d_1,\\,d_2,\\,d_3,\\,\\ldots,\\,d_r}\\text{,}\\) while the \\(n-r+1\\) non-pivot columns have indices in \\(F=\\set{f_1,\\,f_2,\\,f_3,\\,\\ldots,\\,f_{n-r},\\,n+1}\\text{.}\\)  Define vectors \\(\\vect{c}\\text{,}\\) \\(\\vect{u}_j\\text{,}\\) \\(1\\leq j\\leq n-r\\) of size \\(n\\) by\n\n\\begin{align*}\n\\vectorentry{\\vect{c}}{i}&=\n\\begin{cases}\n0&\\text{if }i\\in F\\\\\n\\matrixentry{B}{k,n+1}&\\text{if }i\\in D,i=d_k\n\\end{cases}\\\\\n\\vectorentry{\\vect{u}_j}{i}&=\n\\begin{cases}\n1&\\text{if }i\\in F, i=f_j\\\\\n0&\\text{if }i\\in F, i\\neq f_j\\\\\n-\\matrixentry{B}{k,f_j}&\\text{if }i\\in D, i=d_k\n\\end{cases}\\text{.}\n\\end{align*}\n\nThen the set of solutions to the system of equations \\(\\linearsystem{A}{\\vect{b}}\\) is\n\n\\begin{equation*}\nS=\\setparts{\n\\vect{c}+\\alpha_1\\vect{u}_1+\\alpha_2\\vect{u}_2+\\alpha_3\\vect{u}_3+\\cdots+\\alpha_{n-r}\\vect{u}_{n-r}\n}{\n\\alpha_1,\\,\\alpha_2,\\,\\alpha_3,\\,\\ldots,\\,\\alpha_{n-r}\\in\\complexes\n}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Vector Form of Solutions to Linear Systems",
    "section": "LC",
    "section_title": "Linear Combinations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Particular Solution Plus Homogeneous Solutions",
    "back": "Suppose that \\(\\vect{w}\\) is one solution to the linear system of equations \\(\\linearsystem{A}{\\vect{b}}\\text{.}\\)  Then \\(\\vect{y}\\) is a solution to \\(\\linearsystem{A}{\\vect{b}}\\) if and only if \\(\\vect{y}=\\vect{w}+\\vect{z}\\) for some vector \\(\\vect{z}\\in\\nsp{A}\\text{.}\\)",
    "type": "Theorem",
    "title": "Particular Solution Plus Homogeneous Solutions",
    "section": "LC",
    "section_title": "Linear Combinations",
    "category": "Theorem"
  },
  {
    "front": "Define: Span of a Set of Column Vectors",
    "back": "Given a set of vectors \\(S=\\{\\vectorlist{u}{p}\\}\\text{,}\\) their span , \\(\\spn{S}\\text{,}\\) is the set of all possible linear combinations of \\(\\vectorlist{u}{p}\\text{.}\\)  Symbolically,\n\n\\begin{align*}\n\\spn{S}&=\\setparts{\\lincombo{\\alpha}{u}{p}}{\\alpha_i\\in\\complexes,\\,1\\leq i\\leq p}\\\\\n&=\\setparts{\\sum_{i=1}^{p}\\alpha_i\\vect{u}_i}{\\alpha_i\\in\\complexes,\\,1\\leq i\\leq p}\\text{.}\n\\end{align*}",
    "type": "Definition",
    "title": "Span of a Set of Column Vectors",
    "section": "SS",
    "section_title": "Spanning Sets",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Spanning Sets for Null Spaces",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix, and \\(B\\) is a row-equivalent matrix in reduced row-echelon form.  Suppose that \\(B\\) has \\(r\\) pivot columns, with indices given by \\(D=\\set{d_1,\\,d_2,\\,d_3,\\,\\ldots,\\,d_r}\\text{,}\\) while the \\(n-r\\) non-pivot columns have indices \\(F=\\set{f_1,\\,f_2,\\,f_3,\\,\\ldots,\\,f_{n-r},\\,n+1}\\text{.}\\)  Construct the \\(n-r\\) vectors \\(\\vect{z}_j\\text{,}\\) \\(1\\leq j\\leq n-r\\) of size \\(n\\text{,}\\)\n\n\\begin{equation*}\n\\vectorentry{\\vect{z}_j}{i}=\n\\begin{cases}\n1&\\text{if }i\\in F, i=f_j\\\\\n0&\\text{if }i\\in F, i\\neq f_j\\\\\n-\\matrixentry{B}{k,f_j}&\\text{if }i\\in D, i=d_k\n\\end{cases}\\text{.}\n\\end{equation*}\n\nThen the null space of \\(A\\) is given by\n\n\\begin{equation*}\n\\nsp{A}=\\spn{\\left\\{\\vectorlist{z}{n-r}\\right\\}}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Spanning Sets for Null Spaces",
    "section": "SS",
    "section_title": "Spanning Sets",
    "category": "Theorem"
  },
  {
    "front": "Define: Relation of Linear Dependence for Column Vectors",
    "back": "Given a set of vectors \\(S=\\set{\\vectorlist{u}{n}}\\text{,}\\) a true statement of the form\n\n\\begin{equation*}\n\\lincombo{\\alpha}{u}{n}=\\zerovector\n\\end{equation*}\n\nis a relation of linear dependence on \\(S\\text{.}\\)  If this statement is formed in a trivial fashion, i.e. \\(\\alpha_i=0\\text{,}\\) \\(1\\leq i\\leq n\\text{,}\\) then we say it is the trivial relation of linear dependence on \\(S\\text{.}\\)",
    "type": "Definition",
    "title": "Relation of Linear Dependence for Column Vectors",
    "section": "LI",
    "section_title": "Linear Independence",
    "category": "Definition"
  },
  {
    "front": "Define: Linear Independence of Column Vectors",
    "back": "The set of vectors \\(S=\\set{\\vectorlist{u}{n}}\\) is linearly dependent if there is a relation of linear dependence on \\(S\\) that is not trivial.  In the case where the only relation of linear dependence on \\(S\\) is the trivial one, then \\(S\\) is a linearly independent set of vectors.",
    "type": "Definition",
    "title": "Linear Independence of Column Vectors",
    "section": "LI",
    "section_title": "Linear Independence",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Linearly Independent Vectors and Homogeneous Systems",
    "back": "Suppose that \\(S=\\set{\\vectorlist{v}{n}}\\subseteq\\complex{m}\\) is a set of vectors and \\(A\\) is the \\(m\\times n\\) matrix whose columns are the vectors in \\(S\\text{.}\\)  Then \\(S\\) is a linearly independent set if and only if the homogeneous system \\(\\homosystem{A}\\) has a unique solution.",
    "type": "Theorem",
    "title": "Linearly Independent Vectors and Homogeneous Systems",
    "section": "LI",
    "section_title": "Linear Independence",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Linearly Independent Vectors, \\(r\\) and \\(n\\)",
    "back": "Suppose that \\(S=\\set{\\vectorlist{v}{n}}\\subseteq\\complex{m}\\) is a set of vectors and \\(A\\) is the \\(m\\times n\\) matrix whose columns are the vectors in \\(S\\text{.}\\)   Let \\(B\\) be a matrix in reduced row-echelon form that is row-equivalent to \\(A\\) and let \\(r\\) denote the number of pivot columns in \\(B\\text{.}\\)  Then \\(S\\) is linearly independent if and only if \\(n=r\\text{.}\\)",
    "type": "Theorem",
    "title": "Linearly Independent Vectors, \\(r\\) and \\(n\\)",
    "section": "LI",
    "section_title": "Linear Independence",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: More Vectors than Size implies Linear Dependence",
    "back": "Suppose that \\(S=\\set{\\vectorlist{u}{n}}\\subseteq\\complex{m}\\) and \\(n\\gt m\\text{.}\\) Then \\(S\\) is a linearly dependent set.",
    "type": "Theorem",
    "title": "More Vectors than Size implies Linear Dependence",
    "section": "LI",
    "section_title": "Linear Independence",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrices have Linearly Independent Columns",
    "back": "Suppose that \\(A\\) is a square matrix.  Then \\(A\\) is nonsingular if and only if the columns of \\(A\\) form a linearly independent set.",
    "type": "Theorem",
    "title": "Nonsingular Matrices have Linearly Independent Columns",
    "section": "LI",
    "section_title": "Linear Independence",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrix Equivalences, Round 2",
    "back": "Suppose that \\(A\\) is a square matrix.  The following are equivalent.",
    "type": "Theorem",
    "title": "Nonsingular Matrix Equivalences, Round 2",
    "section": "LI",
    "section_title": "Linear Independence",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Basis for Null Spaces",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix, and \\(B\\) is a row-equivalent matrix in reduced row-echelon form with \\(r\\) pivot columns.  Let \\(D=\\{d_1,\\,d_2,\\,d_3,\\,\\ldots,\\,d_r\\}\\) and \\(F=\\{f_1,\\,f_2,\\,f_3,\\,\\ldots,\\,f_{n-r}\\}\\) be the sets of column indices where \\(B\\) does and does not (respectively) have pivot columns.  Construct the \\(n-r\\) vectors \\(\\vect{z}_j\\text{,}\\) \\(1\\leq j\\leq n-r\\) of size \\(n\\) as\n\n\\begin{equation*}\n\\vectorentry{\\vect{z}_j}{i}=\n\\begin{cases}\n1&\\text{if }i\\in F, i=f_j\\\\\n0&\\text{if }i\\in F, i\\neq f_j\\\\\n-\\matrixentry{B}{k,f_j}&\\text{if }i\\in D, i=d_k\n\\end{cases}\\text{.}\n\\end{equation*}\n\nDefine the set \\(S=\\set{\\vectorlist{z}{n-r}}\\text{.}\\)  Then",
    "type": "Theorem",
    "title": "Basis for Null Spaces",
    "section": "LI",
    "section_title": "Linear Independence",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Dependency in Linearly Dependent Sets",
    "back": "Suppose that \\(S=\\set{\\vectorlist{u}{n}}\\) is a set of vectors.  Then \\(S\\) is a linearly dependent set if and only if there is an index \\(t\\text{,}\\) \\(1\\leq t\\leq n\\) such that \\(\\vect{u_t}\\) is a linear combination of the vectors \\(\\vect{u}_1,\\,\\vect{u}_2,\\,\\vect{u}_3,\\,\\ldots,\\,\\vect{u}_{t-1},\\,\\vect{u}_{t+1},\\,\\ldots,\\,\\vect{u}_n\\text{.}\\)",
    "type": "Theorem",
    "title": "Dependency in Linearly Dependent Sets",
    "section": "LDS",
    "section_title": "Linear Dependence and Spans",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Basis of a Span",
    "back": "Suppose that \\(S=\\set{\\vectorlist{v}{n}}\\) is a set of column vectors.  Define \\(W=\\spn{S}\\) and let \\(A\\) be the matrix whose columns are the vectors from \\(S\\text{.}\\)  Let \\(B\\) be the reduced row-echelon form of \\(A\\text{,}\\) with \\(D=\\set{\\scalarlist{d}{r}}\\) the set of indices for the pivot columns of \\(B\\text{.}\\)  Then",
    "type": "Theorem",
    "title": "Basis of a Span",
    "section": "LDS",
    "section_title": "Linear Dependence and Spans",
    "category": "Theorem"
  },
  {
    "front": "Define: Complex Conjugate of a Column Vector",
    "back": "Suppose that \\(\\vect{u}\\) is a vector from \\(\\complex{m}\\text{.}\\)  Then the conjugate of the vector, \\(\\conjugate{\\vect{u}}\\text{,}\\) is defined by\n\n\\begin{align*}\n\\vectorentry{\\conjugate{\\vect{u}}}{i}\n&=\\conjugate{\\vectorentry{\\vect{u}}{i}}\n&&1\\leq i\\leq m\\text{.}\n\\end{align*}",
    "type": "Definition",
    "title": "Complex Conjugate of a Column Vector",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Conjugation Respects Vector Addition",
    "back": "Suppose \\(\\vect{x}\\) and \\(\\vect{y}\\) are two vectors from \\(\\complex{m}\\text{.}\\)  Then\n\n\\begin{equation*}\n\\conjugate{\\vect{x}+\\vect{y}}=\\conjugate{\\vect{x}}+\\conjugate{\\vect{y}}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Conjugation Respects Vector Addition",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Conjugation Respects Vector Scalar Multiplication",
    "back": "Suppose \\(\\vect{x}\\) is a vector from \\(\\complex{m}\\text{,}\\) and \\(\\alpha\\in\\complexes\\) is a scalar.  Then\n\n\\begin{equation*}\n\\conjugate{\\alpha\\vect{x}}=\\conjugate{\\alpha}\\,\\conjugate{\\vect{x}}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Conjugation Respects Vector Scalar Multiplication",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Theorem"
  },
  {
    "front": "Define: Inner Product",
    "back": "Given the vectors \\(\\vect{u},\\,\\vect{v}\\in\\complex{m}\\) the inner product of \\(\\vect{u}\\) and \\(\\vect{v}\\) is the scalar quantity in \\(\\complexes\\)\n\n\\begin{equation*}\n\\innerproduct{\\vect{u}}{\\vect{v}}=\n\\conjugate{\\vectorentry{\\vect{u}}{1}}\\vectorentry{\\vect{v}}{1}+\n\\conjugate{\\vectorentry{\\vect{u}}{2}}\\vectorentry{\\vect{v}}{2}+\n\\conjugate{\\vectorentry{\\vect{u}}{3}}\\vectorentry{\\vect{v}}{3}+\n\\cdots+\n\\conjugate{\\vectorentry{\\vect{u}}{m}}\\vectorentry{\\vect{v}}{m}\n=\n\\sum_{i=1}^{m}\\conjugate{\\vectorentry{\\vect{u}}{i}}\\vectorentry{\\vect{v}}{i}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Inner Product",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Inner Product and Vector Addition",
    "back": "Suppose \\(\\vect{u},\\,\\vect{v},\\,\\vect{w}\\in\\complex{m}\\text{.}\\)  Then",
    "type": "Theorem",
    "title": "Inner Product and Vector Addition",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Inner Product and Scalar Multiplication",
    "back": "Suppose \\(\\vect{u},\\,\\vect{v}\\in\\complex{m}\\) and \\(\\alpha\\in\\complexes\\text{.}\\)  Then",
    "type": "Theorem",
    "title": "Inner Product and Scalar Multiplication",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Inner Product is Anti-Commutative",
    "back": "Suppose that \\(\\vect{u}\\) and \\(\\vect{v}\\) are vectors in \\(\\complex{m}\\text{.}\\)  Then \\(\\innerproduct{\\vect{u}}{\\vect{v}}=\\conjugate{\\innerproduct{\\vect{v}}{\\vect{u}}}\\text{.}\\)",
    "type": "Theorem",
    "title": "Inner Product is Anti-Commutative",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Theorem"
  },
  {
    "front": "Define: Norm of a Vector",
    "back": "The norm of the vector \\(\\vect{u}\\) is the scalar quantity in \\(\\complexes\\)\n\n\\begin{equation*}\n\\norm{\\vect{u}}=\n\\sqrt{\n\\modulus{\\vectorentry{\\vect{u}}{1}}^2+\n\\modulus{\\vectorentry{\\vect{u}}{2}}^2+\n\\modulus{\\vectorentry{\\vect{u}}{3}}^2+\n\\cdots+\n\\modulus{\\vectorentry{\\vect{u}}{m}}^2\n}\n=\n\\sqrt{\\sum_{i=1}^{m}\\modulus{\\vectorentry{\\vect{u}}{i}}^2}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Norm of a Vector",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Inner Products and Norms",
    "back": "Suppose that \\(\\vect{u}\\) is a vector in \\(\\complex{m}\\text{.}\\)  Then \\(\\norm{\\vect{u}}^2=\\innerproduct{\\vect{u}}{\\vect{u}}\\text{.}\\)",
    "type": "Theorem",
    "title": "Inner Products and Norms",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Positive Inner Products",
    "back": "Suppose that \\(\\vect{u}\\) is a vector in \\(\\complex{m}\\text{.}\\)  Then \\(\\innerproduct{\\vect{u}}{\\vect{u}}\\geq 0\\) with equality if and only if \\(\\vect{u}=\\zerovector\\text{.}\\)",
    "type": "Theorem",
    "title": "Positive Inner Products",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Theorem"
  },
  {
    "front": "Define: Orthogonal Vectors",
    "back": "A pair of vectors, \\(\\vect{u}\\) and \\(\\vect{v}\\text{,}\\) from \\(\\complex{m}\\) are orthogonal if their inner product is zero, that is, \\(\\innerproduct{\\vect{u}}{\\vect{v}}=0\\text{.}\\)",
    "type": "Definition",
    "title": "Orthogonal Vectors",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Definition"
  },
  {
    "front": "Define: Orthogonal Set of Vectors",
    "back": "Suppose that \\(S=\\set{\\vectorlist{u}{n}}\\) is a set of vectors from \\(\\complex{m}\\text{.}\\)  Then \\(S\\) is an orthogonal set if every pair of different vectors from \\(S\\) is orthogonal, that is \\(\\innerproduct{\\vect{u}_i}{\\vect{u}_j}=0\\) whenever \\(i\\neq j\\text{.}\\)",
    "type": "Definition",
    "title": "Orthogonal Set of Vectors",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Definition"
  },
  {
    "front": "Define: Standard Unit Vectors",
    "back": "Let \\(\\vect{e}_j\\in\\complex{m}\\text{,}\\) \\(1\\leq j\\leq m\\) denote the column vectors defined by\n\n\\begin{equation*}\n\\vectorentry{\\vect{e}_j}{i}=\n\\begin{cases}\n1 & \\text{if }i=j\\\\\n0 & \\text{if }i\\neq j\n\\end{cases}\\text{.}\n\\end{equation*}\n\nThen the set\n\n\\begin{align*}\n\\set{\\vectorlist{e}{m}}&=\\setparts{\\vect{e}_j}{1\\leq j\\leq m}\n\\end{align*}\n\nis the set of standard unit vectors in \\(\\complex{m}\\text{.}\\)",
    "type": "Definition",
    "title": "Standard Unit Vectors",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Orthogonal Sets are Linearly Independent",
    "back": "Suppose that \\(S\\) is an orthogonal set of nonzero vectors.  Then \\(S\\) is linearly independent.",
    "type": "Theorem",
    "title": "Orthogonal Sets are Linearly Independent",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Gram-Schmidt Procedure",
    "back": "Suppose that \\(S=\\set{\\vectorlist{v}{p}}\\) is a linearly independent set of vectors in \\(\\complex{m}\\text{.}\\)  Define the vectors \\(\\vect{u}_i\\text{,}\\) \\(1\\leq i\\leq p\\) by\n\n\\begin{equation*}\n\\vect{u}_i=\\vect{v}_i\n-\\frac{\\innerproduct{\\vect{u}_1}{\\vect{v}_i}}{\\innerproduct{\\vect{u}_1}{\\vect{u}_1}}\\vect{u}_1\n-\\frac{\\innerproduct{\\vect{u}_2}{\\vect{v}_i}}{\\innerproduct{\\vect{u}_2}{\\vect{u}_2}}\\vect{u}_2\n-\\frac{\\innerproduct{\\vect{u}_3}{\\vect{v}_i}}{\\innerproduct{\\vect{u}_3}{\\vect{u}_3}}\\vect{u}_3\n-\\cdots\n-\\frac{\\innerproduct{\\vect{u}_{i-1}}{\\vect{v}_i}}{\\innerproduct{\\vect{u}_{i-1}}{\\vect{u}_{i-1}}}\\vect{u}_{i-1}\\text{.}\n\\end{equation*}\n\nLet \\(T=\\set{\\vectorlist{u}{p}}\\text{.}\\)  Then \\(T\\) is an orthogonal set of nonzero vectors, and \\(\\spn{T}=\\spn{S}\\text{.}\\)",
    "type": "Theorem",
    "title": "Gram-Schmidt Procedure",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Theorem"
  },
  {
    "front": "Define: OrthoNormal Set",
    "back": "Suppose \\(S=\\set{\\vectorlist{u}{n}}\\) is an orthogonal set of vectors such that \\(\\norm{\\vect{u}_i}=1\\) for all \\(1\\leq i\\leq n\\text{.}\\)  Then \\(S\\) is an orthonormal set of vectors.",
    "type": "Definition",
    "title": "OrthoNormal Set",
    "section": "O",
    "section_title": "Orthogonality",
    "category": "Definition"
  },
  {
    "front": "Define: Vector Space of \\(m\\times n\\) Matrices",
    "back": "The vector space \\(M_{mn}\\) is the set of all \\(m\\times n\\) matrices with entries from the set of complex numbers.",
    "type": "Definition",
    "title": "Vector Space of \\(m\\times n\\) Matrices",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Definition"
  },
  {
    "front": "Define: Matrix Equality",
    "back": "The \\(m\\times n\\) matrices \\(A\\) and \\(B\\) are equal , written \\(A=B\\) provided \\(\\matrixentry{A}{ij}=\\matrixentry{B}{ij}\\) for all \\(1\\leq i\\leq m\\text{,}\\) \\(1\\leq j\\leq n\\text{.}\\)",
    "type": "Definition",
    "title": "Matrix Equality",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Definition"
  },
  {
    "front": "Define: Matrix Addition",
    "back": "Given the \\(m\\times n\\) matrices  \\(A\\) and \\(B\\text{,}\\) define the sum of \\(A\\) and \\(B\\) as an \\(m\\times n\\) matrix, written \\(A+B\\text{,}\\) by \\(\\matrixentry{A+B}{ij}=\\matrixentry{A}{ij}+\\matrixentry{B}{ij}\\text{,}\\) for \\(1\\leq i\\leq m,\\,1\\leq j\\leq n\\text{.}\\)",
    "type": "Definition",
    "title": "Matrix Addition",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Definition"
  },
  {
    "front": "Define: Matrix Scalar Multiplication",
    "back": "Given the \\(m\\times n\\) matrix \\(A\\) and the scalar \\(\\alpha\\in\\complexes\\text{,}\\) the scalar multiple of \\(A\\) is the \\(m\\times n\\) matrix, written \\(\\alpha A\\text{,}\\) and defined by \\(\\matrixentry{\\alpha A}{ij}=\\alpha\\matrixentry{A}{ij}\\text{,}\\) for \\(1\\leq i\\leq m,\\,1\\leq j\\leq n\\text{.}\\)",
    "type": "Definition",
    "title": "Matrix Scalar Multiplication",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Vector Space Properties of Matrices",
    "back": "Suppose that \\(M_{mn}\\) is the set of all \\(m\\times n\\) matrices ( Definition VSM ) with addition and scalar multiplication as defined in Definition MA and Definition MSM .  Then",
    "type": "Theorem",
    "title": "Vector Space Properties of Matrices",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "Define: Zero Matrix",
    "back": "The \\(m\\times n\\) zero matrix is written as \\(\\zeromatrix=\\zeromatrix_{m\\times n}\\) and defined by \\(\\matrixentry{\\zeromatrix}{ij}=0\\text{,}\\) for all \\(1\\leq i\\leq m\\text{,}\\) \\(1\\leq j\\leq n\\text{.}\\)",
    "type": "Definition",
    "title": "Zero Matrix",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Definition"
  },
  {
    "front": "Define: Transpose of a Matrix",
    "back": "Given an \\(m\\times n\\) matrix \\(A\\text{,}\\) its transpose is the \\(n\\times m\\) matrix \\(\\transpose{A}\\) given by \\(\\matrixentry{\\transpose{A}}{ij}=\\matrixentry{A}{ji}\\text{,}\\) for \\(1\\leq i\\leq n,\\,1\\leq j\\leq m\\text{.}\\)",
    "type": "Definition",
    "title": "Transpose of a Matrix",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Definition"
  },
  {
    "front": "Define: Symmetric Matrix",
    "back": "The matrix \\(A\\) is symmetric if \\(A=\\transpose{A}\\text{.}\\)",
    "type": "Definition",
    "title": "Symmetric Matrix",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Symmetric Matrices are Square",
    "back": "Suppose that \\(A\\) is a symmetric matrix.  Then \\(A\\) is square.",
    "type": "Theorem",
    "title": "Symmetric Matrices are Square",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Transpose and Matrix Addition",
    "back": "Suppose that \\(A\\) and \\(B\\) are \\(m\\times n\\) matrices.  Then  \\(\\transpose{(A+B)}=\\transpose{A}+\\transpose{B}\\text{.}\\)",
    "type": "Theorem",
    "title": "Transpose and Matrix Addition",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Transpose and Matrix Scalar Multiplication",
    "back": "Suppose that \\(\\alpha\\in\\complexes\\) and \\(A\\) is an \\(m\\times n\\) matrix.  Then \\(\\transpose{(\\alpha A)}=\\alpha\\transpose{A}\\text{.}\\)",
    "type": "Theorem",
    "title": "Transpose and Matrix Scalar Multiplication",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Transpose of a Transpose",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then \\(\\transpose{\\left(\\transpose{A}\\right)}=A\\text{.}\\)",
    "type": "Theorem",
    "title": "Transpose of a Transpose",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "Define: Complex Conjugate of a Matrix",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix.  Then the conjugate of \\(A\\text{,}\\) written \\(\\conjugate{A}\\) is an \\(m\\times n\\) matrix defined by \\(\\matrixentry{\\conjugate{A}}{ij}=\\conjugate{\\matrixentry{A}{ij}}\\) for \\(1\\leq i\\leq m\\text{,}\\) \\(1\\leq j\\leq n\\text{.}\\)",
    "type": "Definition",
    "title": "Complex Conjugate of a Matrix",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Conjugation Respects Matrix Addition",
    "back": "Suppose that \\(A\\) and \\(B\\) are \\(m\\times n\\) matrices.  Then \\(\\conjugate{A+B}=\\conjugate{A}+\\conjugate{B}\\text{.}\\)",
    "type": "Theorem",
    "title": "Conjugation Respects Matrix Addition",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Conjugation Respects Matrix Scalar Multiplication",
    "back": "Suppose that \\(\\alpha\\in\\complexes\\) and \\(A\\) is an \\(m\\times n\\) matrix.  Then \\(\\conjugate{\\alpha A}=\\conjugate{\\alpha}\\conjugate{A}\\text{.}\\)",
    "type": "Theorem",
    "title": "Conjugation Respects Matrix Scalar Multiplication",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Conjugate of the Conjugate of a Matrix",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then \\(\\conjugate{\\left(\\conjugate{A}\\right)}=A\\text{.}\\)",
    "type": "Theorem",
    "title": "Conjugate of the Conjugate of a Matrix",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Conjugation and Transposes",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then \\(\\conjugate{\\left(\\transpose{A}\\right)}=\\transpose{\\left(\\conjugate{A}\\right)}\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix Conjugation and Transposes",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "Define: Adjoint",
    "back": "If \\(A\\) is a matrix, then its adjoint is \\(\\adjoint{A}=\\transpose{\\left(\\conjugate{A}\\right)}\\text{.}\\)",
    "type": "Definition",
    "title": "Adjoint",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Adjoint and Matrix Addition",
    "back": "Suppose \\(A\\) and \\(B\\) are matrices of the same size.  Then \\(\\adjoint{\\left(A+B\\right)}=\\adjoint{A}+\\adjoint{B}\\text{.}\\)",
    "type": "Theorem",
    "title": "Adjoint and Matrix Addition",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Adjoint and Matrix Scalar Multiplication",
    "back": "Suppose \\(\\alpha\\in\\complexes\\) is a scalar and \\(A\\) is a matrix.  Then \\(\\adjoint{\\left(\\alpha A\\right)}=\\conjugate{\\alpha}\\adjoint{A}\\text{.}\\)",
    "type": "Theorem",
    "title": "Adjoint and Matrix Scalar Multiplication",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Adjoint of an Adjoint",
    "back": "Suppose that \\(A\\) is a matrix.  Then \\(\\adjoint{\\left(\\adjoint{A}\\right)}=A\\text{.}\\)",
    "type": "Theorem",
    "title": "Adjoint of an Adjoint",
    "section": "MO",
    "section_title": "Matrix Operations",
    "category": "Theorem"
  },
  {
    "front": "Define: Matrix-Vector Product",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix with columns \\(\\vectorlist{A}{n}\\) and \\(\\vect{u}\\) is a vector of size \\(n\\text{.}\\)  Then the matrix-vector product of \\(A\\) with \\(\\vect{u}\\) is the linear combination\n\n\\begin{equation*}\nA\\vect{u}=\n\\vectorentry{\\vect{u}}{1}\\vect{A}_1+\n\\vectorentry{\\vect{u}}{2}\\vect{A}_2+\n\\vectorentry{\\vect{u}}{3}\\vect{A}_3+\n\\cdots+\n\\vectorentry{\\vect{u}}{n}\\vect{A}_n\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Matrix-Vector Product",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Systems of Linear Equations as Matrix Multiplication",
    "back": "The set of solutions to the linear system \\(\\linearsystem{A}{\\vect{b}}\\) equals the set of solutions for \\(\\vect{x}\\) in the vector equation \\(A\\vect{x}=\\vect{b}\\text{.}\\)",
    "type": "Theorem",
    "title": "Systems of Linear Equations as Matrix Multiplication",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Equal Matrices and Matrix-Vector Products",
    "back": "Suppose that \\(A\\) and \\(B\\) are \\(m\\times n\\) matrices such that \\(A\\vect{x}=B\\vect{x}\\) for every \\(\\vect{x}\\in\\complex{n}\\text{.}\\)  Then \\(A=B\\text{.}\\)",
    "type": "Theorem",
    "title": "Equal Matrices and Matrix-Vector Products",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "Define: Matrix Multiplication",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix and \\(\\vectorlist{B}{p}\\) are the columns of an \\(n\\times p\\) matrix \\(B\\text{.}\\)  Then the matrix product of \\(A\\) with \\(B\\) is the \\(m\\times p\\) matrix where column \\(i\\) is the matrix-vector product \\(A\\vect{B}_i\\text{.}\\)  Symbolically\n\n\\begin{equation*}\nAB=A\\matrixcolumns{B}{p}=\\left[A\\vect{B}_1|A\\vect{B}_2|A\\vect{B}_3|\\ldots|A\\vect{B}_p\\right]\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Matrix Multiplication",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Entries of Matrix Products",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix and \\(B\\) is an \\(n\\times p\\) matrix.  Then for \\(1\\leq i\\leq m\\text{,}\\) \\(1\\leq j\\leq p\\text{,}\\) the individual entries of \\(AB\\) are given by\n\n\\begin{align*}\n\\matrixentry{AB}{ij}\n&=\n\\matrixentry{A}{i1}\\matrixentry{B}{1j}+\n\\matrixentry{A}{i2}\\matrixentry{B}{2j}+\n\\matrixentry{A}{i3}\\matrixentry{B}{3j}+\n\\cdots+\n\\matrixentry{A}{in}\\matrixentry{B}{nj}\\\\\n&=\n\\sum_{k=1}^{n}\\matrixentry{A}{ik}\\matrixentry{B}{kj}\\text{.}\n\\end{align*}",
    "type": "Theorem",
    "title": "Entries of Matrix Products",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Multiplication and the Zero Matrix",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix.  Then",
    "type": "Theorem",
    "title": "Matrix Multiplication and the Zero Matrix",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Multiplication and Identity Matrix",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix.  Then",
    "type": "Theorem",
    "title": "Matrix Multiplication and Identity Matrix",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Multiplication Distributes Across Addition",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix and \\(B\\) and \\(C\\) are \\(n\\times p\\) matrices and \\(D\\) is a \\(p\\times s\\) matrix.  Then",
    "type": "Theorem",
    "title": "Matrix Multiplication Distributes Across Addition",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Multiplication and Scalar Matrix Multiplication",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix and \\(B\\) is an \\(n\\times p\\) matrix.  Let \\(\\alpha\\) be a scalar.  Then \\(\\alpha(AB)=(\\alpha A)B=A(\\alpha B)\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix Multiplication and Scalar Matrix Multiplication",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Multiplication is Associative",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix, \\(B\\) is an \\(n\\times p\\) matrix and \\(D\\) is a \\(p\\times s\\) matrix.  Then  \\(A(BD)=(AB)D\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix Multiplication is Associative",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Multiplication and Inner Products",
    "back": "If we consider the vectors \\(\\vect{u},\\,\\vect{v}\\in\\complex{m}\\) as \\(m\\times 1\\) matrices then \\(\\innerproduct{\\vect{u}}{\\vect{v}}\n=\\transpose{\\conjugate{\\vect{u}}}\\vect{v}\n=\\adjoint{\\vect{u}}\\vect{v}\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix Multiplication and Inner Products",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Multiplication and Complex Conjugation",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix and \\(B\\) is an \\(n\\times p\\) matrix.  Then \\(\\conjugate{AB}=\\conjugate{A}\\,\\conjugate{B}\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix Multiplication and Complex Conjugation",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Multiplication and Transposes",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix and \\(B\\) is an \\(n\\times p\\) matrix.  Then \\(\\transpose{(AB)}=\\transpose{B}\\transpose{A}\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix Multiplication and Transposes",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Multiplication and Adjoints",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix and \\(B\\) is an \\(n\\times p\\) matrix.  Then \\(\\adjoint{(AB)}=\\adjoint{B}\\adjoint{A}\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix Multiplication and Adjoints",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Adjoint and Inner Product",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix and \\(\\vect{x}\\in\\complex{n}\\text{,}\\) \\(\\vect{y}\\in\\complex{m}\\text{.}\\)  Then \\(\\innerproduct{A\\vect{x}}{\\vect{y}}=\\innerproduct{\\vect{x}}{\\adjoint{A}\\vect{y}}\\text{.}\\)",
    "type": "Theorem",
    "title": "Adjoint and Inner Product",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "Define: Hermitian Matrix",
    "back": "The square matrix \\(A\\) is Hermitian (or self-adjoint ) if \\(A=\\adjoint{A}\\text{.}\\)",
    "type": "Definition",
    "title": "Hermitian Matrix",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Hermitian Matrices and Inner Products",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  Then \\(A\\) is Hermitian if and only if \\(\\innerproduct{A\\vect{x}}{\\vect{y}}=\\innerproduct{\\vect{x}}{A\\vect{y}}\\) for all \\(\\vect{x},\\,\\vect{y}\\in\\complex{n}\\text{.}\\)",
    "type": "Theorem",
    "title": "Hermitian Matrices and Inner Products",
    "section": "MM",
    "section_title": "Matrix Multiplication",
    "category": "Theorem"
  },
  {
    "front": "Define: Matrix Inverse",
    "back": "Suppose \\(A\\) and \\(B\\) are square matrices of size \\(n\\) such that \\(AB=I_n\\) and \\(BA=I_n\\text{.}\\)  Then \\(A\\) is invertible and \\(B\\) is the inverse of \\(A\\text{.}\\)  In this situation, we write \\(B=\\inverse{A}\\text{.}\\)",
    "type": "Definition",
    "title": "Matrix Inverse",
    "section": "MISLE",
    "section_title": "Matrix Inverses and Systems of Linear Equations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Two-by-Two Matrix Inverse",
    "back": "\\begin{equation*}\nA=\n\\begin{bmatrix}\na&b\\\\\nc&d\n\\end{bmatrix}\\text{.}\n\\end{equation*}\n\nThen \\(A\\) is invertible if and only if \\(ad-bc\\neq 0\\text{.}\\)  When \\(A\\) is invertible, then\n\n\\begin{equation*}\n\\inverse{A}=\\frac{1}{ad-bc}\n\\begin{bmatrix}\nd&-b\\\\\n-c&a\n\\end{bmatrix}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Two-by-Two Matrix Inverse",
    "section": "MISLE",
    "section_title": "Matrix Inverses and Systems of Linear Equations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Computing the Inverse of a Nonsingular Matrix",
    "back": "Suppose \\(A\\) is a nonsingular square matrix of size \\(n\\text{.}\\)  Create the \\(n\\times 2n\\) matrix \\(M\\) by placing the \\(n\\times n\\) identity matrix \\(I_n\\) to the right of the matrix \\(A\\text{.}\\)  Let \\(N\\) be a matrix that is row-equivalent to \\(M\\) and in reduced row-echelon form.  Finally,  let \\(J\\) be the matrix formed from the final \\(n\\) columns of \\(N\\text{.}\\) Then \\(AJ=I_n\\text{.}\\)",
    "type": "Theorem",
    "title": "Computing the Inverse of a Nonsingular Matrix",
    "section": "MISLE",
    "section_title": "Matrix Inverses and Systems of Linear Equations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Inverse is Unique",
    "back": "Suppose the square matrix \\(A\\) has an inverse.  Then \\(\\inverse{A}\\) is unique.",
    "type": "Theorem",
    "title": "Matrix Inverse is Unique",
    "section": "MISLE",
    "section_title": "Matrix Inverses and Systems of Linear Equations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Socks and Shoes",
    "back": "Suppose \\(A\\) and \\(B\\) are invertible matrices of size \\(n\\text{.}\\)  Then \\(AB\\) is an invertible matrix and \\(\\inverse{(AB)}=\\inverse{B}\\inverse{A}\\text{.}\\)",
    "type": "Theorem",
    "title": "Socks and Shoes",
    "section": "MISLE",
    "section_title": "Matrix Inverses and Systems of Linear Equations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Inverse of a Matrix Inverse",
    "back": "Suppose \\(A\\) is an invertible matrix.  Then \\(\\inverse{A}\\) is invertible and \\(\\inverse{(\\inverse{A})}=A\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix Inverse of a Matrix Inverse",
    "section": "MISLE",
    "section_title": "Matrix Inverses and Systems of Linear Equations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Inverse of a Transpose",
    "back": "Suppose \\(A\\) is an invertible matrix.  Then \\(\\transpose{A}\\) is invertible and \\(\\inverse{(\\transpose{A})}=\\transpose{(\\inverse{A})}\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix Inverse of a Transpose",
    "section": "MISLE",
    "section_title": "Matrix Inverses and Systems of Linear Equations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Inverse of a Scalar Multiple",
    "back": "Suppose \\(A\\) is an invertible matrix and \\(\\alpha\\) is a nonzero scalar.  Then \\(\\inverse{\\left(\\alpha A\\right)}=\\frac{1}{\\alpha}\\inverse{A}\\) and \\(\\alpha A\\) is invertible.",
    "type": "Theorem",
    "title": "Matrix Inverse of a Scalar Multiple",
    "section": "MISLE",
    "section_title": "Matrix Inverses and Systems of Linear Equations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Product has Nonsingular Factors",
    "back": "Suppose that \\(A\\) and \\(B\\) are square matrices of size \\(n\\text{.}\\)  The product \\(AB\\) is nonsingular if and only if \\(A\\) and \\(B\\) are both nonsingular.",
    "type": "Theorem",
    "title": "Nonsingular Product has Nonsingular Factors",
    "section": "MINM",
    "section_title": "Matrix Inverses and Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: One-Sided Inverse is Sufficient",
    "back": "Suppose \\(A\\) and \\(B\\) are  square matrices of size \\(n\\) such that \\(AB=I_n\\text{.}\\)  Then \\(BA=I_n\\text{.}\\)",
    "type": "Theorem",
    "title": "One-Sided Inverse is Sufficient",
    "section": "MINM",
    "section_title": "Matrix Inverses and Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingularity is Invertibility",
    "back": "Suppose that \\(A\\) is a square matrix.  Then \\(A\\) is nonsingular if and only if \\(A\\) is invertible.",
    "type": "Theorem",
    "title": "Nonsingularity is Invertibility",
    "section": "MINM",
    "section_title": "Matrix Inverses and Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrix Equivalences, Round 3",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  The following are equivalent.",
    "type": "Theorem",
    "title": "Nonsingular Matrix Equivalences, Round 3",
    "section": "MINM",
    "section_title": "Matrix Inverses and Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Solution with Nonsingular Coefficient Matrix",
    "back": "Suppose that \\(A\\) is nonsingular.  Then the unique solution to \\(\\linearsystem{A}{\\vect{b}}\\) is \\(\\inverse{A}\\vect{b}\\text{.}\\)",
    "type": "Theorem",
    "title": "Solution with Nonsingular Coefficient Matrix",
    "section": "MINM",
    "section_title": "Matrix Inverses and Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "Define: Unitary Matrices",
    "back": "Suppose that \\(U\\) is a square matrix of size \\(n\\) such that \\(\\adjoint{U}U=I_n\\text{.}\\)  Then we say \\(U\\) is unitary .",
    "type": "Definition",
    "title": "Unitary Matrices",
    "section": "MINM",
    "section_title": "Matrix Inverses and Nonsingular Matrices",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Unitary Matrices are Invertible",
    "back": "Suppose that \\(U\\) is a unitary matrix of size \\(n\\text{.}\\)  Then \\(U\\) is nonsingular, and \\(\\inverse{U}=\\adjoint{U}\\text{.}\\)",
    "type": "Theorem",
    "title": "Unitary Matrices are Invertible",
    "section": "MINM",
    "section_title": "Matrix Inverses and Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Columns of Unitary Matrices are Orthonormal Sets",
    "back": "Suppose that \\(S=\\set{\\vectorlist{A}{n}}\\) is the set of columns of a square matrix \\(A\\) of size \\(n\\text{.}\\)  Then \\(A\\) is a unitary matrix if and only if \\(S\\) is an orthonormal set.",
    "type": "Theorem",
    "title": "Columns of Unitary Matrices are Orthonormal Sets",
    "section": "MINM",
    "section_title": "Matrix Inverses and Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Unitary Matrices Preserve Inner Products",
    "back": "Suppose that \\(U\\) is a unitary matrix of size \\(n\\) and \\(\\vect{u}\\) and \\(\\vect{v}\\) are two vectors from \\(\\complex{n}\\text{.}\\)  Then\n\n\\begin{align*}\n\\innerproduct{U\\vect{u}}{U\\vect{v}}&=\\innerproduct{\\vect{u}}{\\vect{v}}\n&\n&\\text{and}\n&\n\\norm{U\\vect{v}}&=\\norm{\\vect{v}}\\text{.}\n\\end{align*}",
    "type": "Theorem",
    "title": "Unitary Matrices Preserve Inner Products",
    "section": "MINM",
    "section_title": "Matrix Inverses and Nonsingular Matrices",
    "category": "Theorem"
  },
  {
    "front": "Define: Column Space of a Matrix",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix with columns \\(\\vectorlist{A}{n}\\text{.}\\)  Then the column space of \\(A\\text{,}\\) written \\(\\csp{A}\\text{,}\\) is the subset of \\(\\complex{m}\\) containing all linear combinations of the columns of \\(A\\text{,}\\)\n\n\\begin{equation*}\n\\csp{A}=\\spn{\\set{\\vectorlist{A}{n}}}\n\\end{equation*}",
    "type": "Definition",
    "title": "Column Space of a Matrix",
    "section": "CRS",
    "section_title": "Column and Row Spaces",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Column Spaces and Consistent Systems",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix and \\(\\vect{b}\\) is a vector of size \\(m\\text{.}\\)  Then \\(\\vect{b}\\in\\csp{A}\\) if and only if \\(\\linearsystem{A}{\\vect{b}}\\) is consistent.",
    "type": "Theorem",
    "title": "Column Spaces and Consistent Systems",
    "section": "CRS",
    "section_title": "Column and Row Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Basis of the Column Space",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix with columns \\(\\vectorlist{A}{n}\\text{,}\\) and \\(B\\) is a row-equivalent matrix in reduced row-echelon form with \\(r\\) pivot columns.  Let \\(D=\\{d_1,\\,d_2,\\,d_3,\\,\\ldots,\\,d_r\\}\\) be the set of indices for the pivot columns of \\(B\\text{.}\\)  Let \\(T=\\set{\\vect{A}_{d_1},\\,\\vect{A}_{d_2},\\,\\vect{A}_{d_3},\\,\\ldots,\\,\\vect{A}_{d_r}}\\text{.}\\)  Then",
    "type": "Theorem",
    "title": "Basis of the Column Space",
    "section": "CRS",
    "section_title": "Column and Row Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Column Space of a Nonsingular Matrix",
    "back": "Suppose \\(A\\) is a square matrix of size \\(n\\text{.}\\)  Then \\(A\\) is nonsingular if and only if \\(\\csp{A}=\\complex{n}\\text{.}\\)",
    "type": "Theorem",
    "title": "Column Space of a Nonsingular Matrix",
    "section": "CRS",
    "section_title": "Column and Row Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrix Equivalences, Round 4",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  The following are equivalent.",
    "type": "Theorem",
    "title": "Nonsingular Matrix Equivalences, Round 4",
    "section": "CRS",
    "section_title": "Column and Row Spaces",
    "category": "Theorem"
  },
  {
    "front": "Define: Row Space of a Matrix",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix.  Then the row space of \\(A\\text{,}\\) \\(\\rsp{A}\\text{,}\\) is the column space of \\(\\transpose{A}\\text{,}\\) i.e. \\(\\rsp{A}=\\csp{\\transpose{A}}\\text{.}\\)",
    "type": "Definition",
    "title": "Row Space of a Matrix",
    "section": "CRS",
    "section_title": "Column and Row Spaces",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Row-Equivalent Matrices have equal Row Spaces",
    "back": "Suppose \\(A\\) and \\(B\\) are row-equivalent matrices.  Then \\(\\rsp{A}=\\rsp{B}\\text{.}\\)",
    "type": "Theorem",
    "title": "Row-Equivalent Matrices have equal Row Spaces",
    "section": "CRS",
    "section_title": "Column and Row Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Basis for the Row Space",
    "back": "Suppose that \\(A\\) is a matrix and \\(B\\) is a row-equivalent matrix in reduced row-echelon form.  Let \\(S\\) be the set of nonzero columns of \\(\\transpose{B}\\text{.}\\)  Then",
    "type": "Theorem",
    "title": "Basis for the Row Space",
    "section": "CRS",
    "section_title": "Column and Row Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Column Space, Row Space, Transpose",
    "back": "Suppose \\(A\\) is a matrix.  Then \\(\\csp{A}=\\rsp{\\transpose{A}}\\text{.}\\)",
    "type": "Theorem",
    "title": "Column Space, Row Space, Transpose",
    "section": "CRS",
    "section_title": "Column and Row Spaces",
    "category": "Theorem"
  },
  {
    "front": "Define: Left Null Space",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix.  Then the left null space is defined as \\(\\lns{A}=\\nsp{\\transpose{A}}\\subseteq\\complex{m}\\text{.}\\)",
    "type": "Definition",
    "title": "Left Null Space",
    "section": "FS",
    "section_title": "Four Subsets",
    "category": "Definition"
  },
  {
    "front": "Define: Extended Echelon Form",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix.  Extend \\(A\\) on its right side with the addition of an \\(m\\times m\\) identity matrix to form an \\(m\\times (n + m)\\) matrix \\(M\\text{.}\\)  Use row operations to bring \\(M\\) to reduced row-echelon form and call the result \\(N\\text{.}\\)  \\(N\\) is the extended reduced row-echelon form of \\(A\\text{,}\\) and we will standardize on names for five submatrices (\\(B\\text{,}\\) \\(C\\text{,}\\) \\(J\\text{,}\\) \\(K\\text{,}\\) \\(L\\)) of \\(N\\text{.}\\)\n\nLet \\(B\\) denote the \\(m\\times n\\) matrix formed from the first \\(n\\) columns of \\(N\\) and let \\(J\\) denote the \\(m\\times m\\) matrix formed from the last \\(m\\) columns of \\(N\\text{.}\\)  Suppose that \\(B\\) has \\(r\\) nonzero rows.  Further partition \\(N\\) by letting \\(C\\) denote the \\(r\\times n\\) matrix formed from all of the nonzero rows of \\(B\\text{.}\\)  Let \\(K\\) be the \\(r\\times m\\) matrix formed from the first \\(r\\) rows of \\(J\\text{,}\\) while \\(L\\) will be the \\((m-r)\\times m\\) matrix formed from the bottom \\(m-r\\) rows of \\(J\\text{.}\\)  Pictorially,\n\n\\begin{equation*}\nM=[A\\vert I_m]\n\\rref\nN=[B\\vert J]\n=\n\\left[\\begin{array}{c|c}C&K\\\\\\hline\\zeromatrix&L\\end{array}\\right]\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Extended Echelon Form",
    "section": "FS",
    "section_title": "Four Subsets",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Properties of Extended Echelon Form",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix and that \\(N\\) is its extended echelon form.  Then",
    "type": "Theorem",
    "title": "Properties of Extended Echelon Form",
    "section": "FS",
    "section_title": "Four Subsets",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Four Subsets",
    "back": "Suppose \\(A\\) is an \\(m\\times n\\) matrix with extended echelon form \\(N\\text{.}\\)  Suppose the reduced row-echelon form of \\(A\\) has \\(r\\) nonzero rows.  Then \\(C\\) is the submatrix of \\(N\\) formed from the first \\(r\\) rows and the first \\(n\\) columns and \\(L\\) is the submatrix of \\(N\\) formed from the last \\(m\\) columns and the last \\(m-r\\) rows.  Then",
    "type": "Theorem",
    "title": "Four Subsets",
    "section": "FS",
    "section_title": "Four Subsets",
    "category": "Theorem"
  },
  {
    "front": "Define: Vector Space",
    "back": "Suppose that \\(V\\) is a set upon which we have defined two operations: (1) vector addition , which combines two elements of \\(V\\) and is denoted by “+”, and (2) scalar multiplication , which combines a complex number with an element of \\(V\\) and is denoted by juxtaposition.   Then \\(V\\text{,}\\) along with the two operations, is a vector space over \\(\\complexes\\) if the following ten properties hold.\n\nThe objects in \\(V\\) are called vectors , no matter what else they might really be, simply by virtue of being elements of a vector space.",
    "type": "Definition",
    "title": "Vector Space",
    "section": "VS",
    "section_title": "Vector Spaces",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Zero Vector is Unique",
    "back": "Suppose that \\(V\\) is a vector space.   The zero vector, \\(\\zerovector\\text{,}\\)  is unique.",
    "type": "Theorem",
    "title": "Zero Vector is Unique",
    "section": "VS",
    "section_title": "Vector Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Additive Inverses are Unique",
    "back": "Suppose that \\(V\\) is a vector space.   For each \\(\\vect{u}\\in V\\text{,}\\) the additive inverse, \\(\\vect{-u}\\text{,}\\) is unique.",
    "type": "Theorem",
    "title": "Additive Inverses are Unique",
    "section": "VS",
    "section_title": "Vector Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Zero Scalar in Scalar Multiplication",
    "back": "Suppose that \\(V\\) is a vector space and \\(\\vect{u}\\in V\\text{.}\\)  Then \\(0\\vect{u}=\\zerovector\\text{.}\\)",
    "type": "Theorem",
    "title": "Zero Scalar in Scalar Multiplication",
    "section": "VS",
    "section_title": "Vector Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Zero Vector in Scalar Multiplication",
    "back": "Suppose that \\(V\\) is a vector space and \\(\\alpha\\in\\complexes\\text{.}\\)   Then \\(\\alpha\\zerovector=\\zerovector\\text{.}\\)",
    "type": "Theorem",
    "title": "Zero Vector in Scalar Multiplication",
    "section": "VS",
    "section_title": "Vector Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Additive Inverses from Scalar Multiplication",
    "back": "Suppose that \\(V\\) is a vector space and \\(\\vect{u}\\in V\\text{.}\\)  Then \\(\\vect{-u}=(-1)\\vect{u}\\text{.}\\)",
    "type": "Theorem",
    "title": "Additive Inverses from Scalar Multiplication",
    "section": "VS",
    "section_title": "Vector Spaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Scalar Multiplication Equals the Zero Vector",
    "back": "Suppose that \\(V\\) is a vector space and \\(\\alpha\\in\\complexes\\text{.}\\)  If \\(\\alpha\\vect{u}=\\zerovector\\text{,}\\) then either \\(\\alpha=0\\) or \\(\\vect{u}=\\zerovector\\text{.}\\)",
    "type": "Theorem",
    "title": "Scalar Multiplication Equals the Zero Vector",
    "section": "VS",
    "section_title": "Vector Spaces",
    "category": "Theorem"
  },
  {
    "front": "Define: Subspace",
    "back": "Suppose that \\(V\\) and \\(W\\) are two vector spaces that have identical definitions of vector addition and scalar multiplication, and suppose that \\(W\\) is a subset of \\(V\\text{,}\\) \\(W\\subseteq V\\text{.}\\)  Then \\(W\\) is a subspace of \\(V\\text{.}\\)",
    "type": "Definition",
    "title": "Subspace",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Testing Subsets for Subspaces",
    "back": "Suppose that \\(V\\) is a vector space and \\(W\\) is a subset of \\(V\\text{,}\\) \\(W\\subseteq V\\text{.}\\)  Endow \\(W\\) with the same operations as \\(V\\text{.}\\)  Then \\(W\\) is a subspace if and only if three conditions are met,",
    "type": "Theorem",
    "title": "Testing Subsets for Subspaces",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Theorem"
  },
  {
    "front": "Define: Trivial Subspaces",
    "back": "Given the vector space \\(V\\text{,}\\) the subspaces \\(V\\) and \\(\\set{\\zerovector}\\) are each called a trivial subspace .",
    "type": "Definition",
    "title": "Trivial Subspaces",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Null Space of a Matrix is a Subspace",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then the null space of \\(A\\text{,}\\) \\(\\nsp{A}\\text{,}\\) is a subspace of \\(\\complex{n}\\text{.}\\)",
    "type": "Theorem",
    "title": "Null Space of a Matrix is a Subspace",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Theorem"
  },
  {
    "front": "Define: Linear Combination",
    "back": "Suppose that \\(V\\) is a vector space.  Given \\(n\\) vectors \\(\\vectorlist{u}{n}\\) and \\(n\\) scalars \\(\\alpha_1,\\,\\alpha_2,\\,\\alpha_3,\\,\\ldots,\\,\\alpha_n\\text{,}\\) their linear combination is the vector\n\n\\begin{equation*}\n\\lincombo{\\alpha}{u}{n}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Linear Combination",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Definition"
  },
  {
    "front": "Define: Span of a Set",
    "back": "Suppose that \\(V\\) is a vector space.  Given a set of vectors \\(S=\\{\\vectorlist{u}{t}\\}\\text{,}\\) their span , \\(\\spn{S}\\text{,}\\) is the set of all possible linear combinations of \\(\\vectorlist{u}{t}\\text{.}\\)  Symbolically,\n\n\\begin{align*}\n\\spn{S}&=\\setparts{\\lincombo{\\alpha}{u}{t}}{\\alpha_i\\in\\complexes,\\,1\\leq i\\leq t}\\\\\n&=\\setparts{\\sum_{i=1}^{t}\\alpha_i\\vect{u}_i}{\\alpha_i\\in\\complexes,\\,1\\leq i\\leq t}\\text{.}\n\\end{align*}",
    "type": "Definition",
    "title": "Span of a Set",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Span of a Set is a Subspace",
    "back": "Suppose \\(V\\) is a vector space.  Given a set of vectors \\(S=\\{\\vectorlist{u}{t}\\}\\subseteq V\\text{,}\\) their span, \\(\\spn{S}\\text{,}\\) is a subspace.",
    "type": "Theorem",
    "title": "Span of a Set is a Subspace",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Column Space of a Matrix is a Subspace",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then \\(\\csp{A}\\) is a subspace of \\(\\complex{m}\\text{.}\\)",
    "type": "Theorem",
    "title": "Column Space of a Matrix is a Subspace",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Row Space of a Matrix is a Subspace",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then \\(\\rsp{A}\\) is a subspace of \\(\\complex{n}\\text{.}\\)",
    "type": "Theorem",
    "title": "Row Space of a Matrix is a Subspace",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Left Null Space of a Matrix is a Subspace",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then \\(\\lns{A}\\) is a subspace of \\(\\complex{m}\\text{.}\\)",
    "type": "Theorem",
    "title": "Left Null Space of a Matrix is a Subspace",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Subspace Intersection is a Subspace",
    "back": "Suppose that \\(U\\) and \\(V\\) are subspaces of the vector space \\(W\\text{.}\\)  Then their intersection, \\(U\\cap V\\text{,}\\) is a subspace of \\(W\\text{.}\\)",
    "type": "Theorem",
    "title": "Subspace Intersection is a Subspace",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Theorem"
  },
  {
    "front": "Define: Sum of Subspaces",
    "back": "Suppose that \\(U\\) and \\(V\\) are subspaces of the vector space \\(W\\text{.}\\)  Then\n\n\\begin{equation*}\nU+V=\\setparts{\\vect{u}+\\vect{v}}{\\vect{u}\\in U,\\,\\vect{v}\\in V}\n\\end{equation*}\n\nis the sum of \\(U\\) and \\(V\\text{.}\\)",
    "type": "Definition",
    "title": "Sum of Subspaces",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Subspace Sum is a Subspace",
    "back": "Suppose that \\(U\\) and \\(V\\) are subspaces of the vector space \\(W\\text{.}\\)  Then their sum, \\(U+V\\text{,}\\) is a subspace of \\(W\\text{.}\\)",
    "type": "Theorem",
    "title": "Subspace Sum is a Subspace",
    "section": "S",
    "section_title": "Subspaces",
    "category": "Theorem"
  },
  {
    "front": "Define: Relation of Linear Dependence",
    "back": "Suppose that \\(V\\) is a vector space.  Given a set of vectors \\(S=\\set{\\vectorlist{u}{n}}\\text{,}\\) an equation of the form\n\n\\begin{equation*}\n\\lincombo{\\alpha}{u}{n}=\\zerovector\n\\end{equation*}\n\nis a relation of linear dependence on \\(S\\text{.}\\)  If this equation is formed in a trivial fashion, i.e. \\(\\alpha_i=0\\text{,}\\) \\(1\\leq i\\leq n\\text{,}\\) then we say it is a trivial relation of linear dependence on \\(S\\text{.}\\)",
    "type": "Definition",
    "title": "Relation of Linear Dependence",
    "section": "LISS",
    "section_title": "Linear Independence and Spanning Sets",
    "category": "Definition"
  },
  {
    "front": "Define: Linear Independence",
    "back": "Suppose that \\(V\\) is a vector space.  The set of vectors \\(S=\\set{\\vectorlist{u}{n}}\\) from \\(V\\) is linearly dependent if there is a relation of linear dependence on \\(S\\) that is not trivial.  In the case where the only relation of linear dependence on \\(S\\) is the trivial one, then \\(S\\) is a linearly independent set of vectors.",
    "type": "Definition",
    "title": "Linear Independence",
    "section": "LISS",
    "section_title": "Linear Independence and Spanning Sets",
    "category": "Definition"
  },
  {
    "front": "Define: Spanning Set of a Vector Space",
    "back": "Suppose \\(V\\) is a vector space.  A subset \\(S\\) of \\(V\\) is a spanning set of \\(V\\) if \\(\\spn{S}=V\\text{.}\\)  In this case, we also frequently say \\(S\\) spans \\(V\\text{.}\\)",
    "type": "Definition",
    "title": "Spanning Set of a Vector Space",
    "section": "LISS",
    "section_title": "Linear Independence and Spanning Sets",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Vector Representation Relative to a Basis",
    "back": "Suppose that \\(V\\) is a vector space and \\(B=\\set{\\vectorlist{v}{m}}\\) is a linearly independent set that spans \\(V\\text{.}\\)  Let \\(\\vect{w}\\) be any vector in \\(V\\text{.}\\)  Then there exist unique scalars \\(a_1,\\,a_2,\\,a_3,\\,\\ldots,\\,a_m\\) such that\n\n\\begin{equation*}\n\\vect{w}=\\lincombo{a}{v}{m}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Vector Representation Relative to a Basis",
    "section": "LISS",
    "section_title": "Linear Independence and Spanning Sets",
    "category": "Theorem"
  },
  {
    "front": "Define: Basis",
    "back": "Suppose \\(V\\) is a vector space.  Then a subset \\(S\\subseteq V\\) is a basis of \\(V\\) if it is linearly independent and spans \\(V\\text{.}\\)",
    "type": "Definition",
    "title": "Basis",
    "section": "B",
    "section_title": "Bases",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Standard Unit Vectors are a Basis",
    "back": "The set of standard unit vectors for \\(\\complex{m}\\) ( Definition SUV ), \\(B=\\setparts{\\vect{e}_i}{1\\leq i\\leq m}\\) is a basis for the vector space \\(\\complex{m}\\text{.}\\)",
    "type": "Theorem",
    "title": "Standard Unit Vectors are a Basis",
    "section": "B",
    "section_title": "Bases",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Columns of Nonsingular Matrix are a Basis",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(m\\text{.}\\)  Then the columns of \\(A\\) are a basis of \\(\\complex{m}\\) if and only if \\(A\\) is nonsingular.",
    "type": "Theorem",
    "title": "Columns of Nonsingular Matrix are a Basis",
    "section": "B",
    "section_title": "Bases",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrix Equivalences, Round 5",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  The following are equivalent.",
    "type": "Theorem",
    "title": "Nonsingular Matrix Equivalences, Round 5",
    "section": "B",
    "section_title": "Bases",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Coordinates and Orthonormal Bases",
    "back": "Suppose that \\(B=\\set{\\vectorlist{v}{p}}\\) is an orthonormal basis of the subspace \\(W\\) of \\(\\complex{m}\\text{.}\\)  For any \\(\\vect{w}\\in W\\text{,}\\)\n\n\\begin{equation*}\n\\vect{w}=\n\\innerproduct{\\vect{v}_1}{\\vect{w}}\\vect{v}_1+\n\\innerproduct{\\vect{v}_2}{\\vect{w}}\\vect{v}_2+\n\\innerproduct{\\vect{v}_3}{\\vect{w}}\\vect{v}_3+\n\\cdots+\n\\innerproduct{\\vect{v}_p}{\\vect{w}}\\vect{v}_p\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Coordinates and Orthonormal Bases",
    "section": "B",
    "section_title": "Bases",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Unitary Matrices Convert Orthonormal Bases",
    "back": "Let \\(A\\) be an \\(n\\times n\\) matrix and \\(B=\\set{\\vectorlist{x}{n}}\\) be an orthonormal basis of \\(\\complex{n}\\text{.}\\)  Define\n\n\\begin{equation*}\nC=\\set{A\\vect{x}_1,\\,A\\vect{x}_2,\\,A\\vect{x}_3,\\,\\dots,\\,A\\vect{x}_n}\\text{.}\n\\end{equation*}\n\nThen \\(A\\) is a unitary matrix if and only if \\(C\\) is an orthonormal basis of \\(\\complex{n}\\text{.}\\)",
    "type": "Theorem",
    "title": "Unitary Matrices Convert Orthonormal Bases",
    "section": "B",
    "section_title": "Bases",
    "category": "Theorem"
  },
  {
    "front": "Define: Dimension",
    "back": "Suppose that \\(V\\) is a vector space and \\(\\set{\\vectorlist{v}{t}}\\) is a basis of \\(V\\text{.}\\)  Then the dimension of \\(V\\) is defined by \\(\\dimension{V}=t\\text{.}\\)  If \\(V\\) has no finite bases, we say \\(V\\) has infinite dimension.",
    "type": "Definition",
    "title": "Dimension",
    "section": "D",
    "section_title": "Dimension",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Spanning Sets and Linear Dependence",
    "back": "Suppose that \\(S=\\set{\\vectorlist{v}{t}}\\) is a finite set of vectors which spans the vector space \\(V\\text{.}\\)  Then any set of \\(t+1\\) or more vectors from \\(V\\) is linearly dependent.",
    "type": "Theorem",
    "title": "Spanning Sets and Linear Dependence",
    "section": "D",
    "section_title": "Dimension",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Bases have Identical Sizes",
    "back": "Suppose that \\(V\\) is a vector space with a finite basis \\(B\\) and a second basis \\(C\\text{.}\\)  Then \\(B\\) and \\(C\\) have the same size.",
    "type": "Theorem",
    "title": "Bases have Identical Sizes",
    "section": "D",
    "section_title": "Dimension",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Dimension of \\(\\complex{m}\\)",
    "back": "The dimension of \\(\\complex{m}\\) ( Example VSCV ) is \\(m\\text{.}\\)",
    "type": "Theorem",
    "title": "Dimension of \\(\\complex{m}\\)",
    "section": "D",
    "section_title": "Dimension",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Dimension of \\(P_n\\)",
    "back": "The dimension of \\(P_{n}\\)  ( Example VSP ) is \\(n+1\\text{.}\\)",
    "type": "Theorem",
    "title": "Dimension of \\(P_n\\)",
    "section": "D",
    "section_title": "Dimension",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Dimension of \\(M_{mn}\\)",
    "back": "The dimension of \\(M_{mn}\\)  ( Example VSM ) is \\(mn\\text{.}\\)",
    "type": "Theorem",
    "title": "Dimension of \\(M_{mn}\\)",
    "section": "D",
    "section_title": "Dimension",
    "category": "Theorem"
  },
  {
    "front": "Define: Nullity Of a Matrix",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then the nullity of \\(A\\) is the dimension of the null space of \\(A\\text{,}\\) \\(\\nullity{A}=\\dimension{\\nsp{A}}\\text{.}\\)",
    "type": "Definition",
    "title": "Nullity Of a Matrix",
    "section": "D",
    "section_title": "Dimension",
    "category": "Definition"
  },
  {
    "front": "Define: Rank Of a Matrix",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then the rank of \\(A\\) is the dimension of the column space of \\(A\\text{,}\\) \\(\\rank{A}=\\dimension{\\csp{A}}\\text{.}\\)",
    "type": "Definition",
    "title": "Rank Of a Matrix",
    "section": "D",
    "section_title": "Dimension",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Computing Rank and Nullity",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix and \\(B\\) is a row-equivalent matrix in reduced row-echelon form.  Let \\(r\\) denote the number of pivot columns (or the number of nonzero rows).  Then \\(\\rank{A}=r\\) and \\(\\nullity{A}=n-r\\text{.}\\)",
    "type": "Theorem",
    "title": "Computing Rank and Nullity",
    "section": "D",
    "section_title": "Dimension",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Rank Plus Nullity is Columns",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then \\(\\rank{A}+\\nullity{A}=n\\text{.}\\)",
    "type": "Theorem",
    "title": "Rank Plus Nullity is Columns",
    "section": "D",
    "section_title": "Dimension",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Rank and Nullity of a Nonsingular Matrix",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  The following are equivalent.",
    "type": "Theorem",
    "title": "Rank and Nullity of a Nonsingular Matrix",
    "section": "D",
    "section_title": "Dimension",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrix Equivalences, Round 6",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  The following are equivalent.",
    "type": "Theorem",
    "title": "Nonsingular Matrix Equivalences, Round 6",
    "section": "D",
    "section_title": "Dimension",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Elementary Matrices Do Row Operations",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix, and \\(B\\) is a matrix of the same size that is obtained from \\(A\\) by a single row operation ( Definition RO ).  Then there is an elementary matrix of size \\(m\\) that will convert \\(A\\) to \\(B\\) via matrix multiplication on the left.  More precisely,",
    "type": "Theorem",
    "title": "Elementary Matrices Do Row Operations",
    "section": "DM",
    "section_title": "Determinant of a Matrix",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Elementary Matrices are Nonsingular",
    "back": "If \\(E\\) is an elementary matrix, then \\(E\\) is nonsingular.",
    "type": "Theorem",
    "title": "Elementary Matrices are Nonsingular",
    "section": "DM",
    "section_title": "Determinant of a Matrix",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrices are Products of Elementary Matrices",
    "back": "Suppose that \\(A\\) is a nonsingular matrix.  Then there exists elementary matrices \\(E_1,\\,E_2,\\,E_3,\\,\\dots,\\,E_t\\) so that \\(A=E_1 E_2 E_3\\dots E_t\\text{.}\\)",
    "type": "Theorem",
    "title": "Nonsingular Matrices are Products of Elementary Matrices",
    "section": "DM",
    "section_title": "Determinant of a Matrix",
    "category": "Theorem"
  },
  {
    "front": "Define: SubMatrix",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Then the submatrix \\(\\submatrix{A}{i}{j}\\) is the \\((m-1)\\times (n-1)\\) matrix obtained from \\(A\\) by removing row \\(i\\) and column \\(j\\text{.}\\)",
    "type": "Definition",
    "title": "SubMatrix",
    "section": "DM",
    "section_title": "Determinant of a Matrix",
    "category": "Definition"
  },
  {
    "front": "Define: Determinant of a Matrix",
    "back": "Suppose \\(A\\) is a square matrix.  Then its determinant , \\(\\detname{A}=\\detbars{A}\\text{,}\\) is an element of \\(\\complexes\\) defined recursively by:",
    "type": "Definition",
    "title": "Determinant of a Matrix",
    "section": "DM",
    "section_title": "Determinant of a Matrix",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Determinant of Matrices of Size Two",
    "back": "Suppose that \\(A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\text{.}\\)  Then \\(\\detname{A}=ad-bc\\text{.}\\)",
    "type": "Theorem",
    "title": "Determinant of Matrices of Size Two",
    "section": "DM",
    "section_title": "Determinant of a Matrix",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Determinant Expansion about Rows",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  Then for \\(1\\leq i\\leq n\\text{,}\\)\n\n\\begin{align*}\n\\detname{A}&=\n(-1)^{i+1}\\matrixentry{A}{i1}\\detname{\\submatrix{A}{i}{1}}+\n(-1)^{i+2}\\matrixentry{A}{i2}\\detname{\\submatrix{A}{i}{2}}\\\\\n&\\quad+(-1)^{i+3}\\matrixentry{A}{i3}\\detname{\\submatrix{A}{i}{3}}+\n\\cdots+\n(-1)^{i+n}\\matrixentry{A}{in}\\detname{\\submatrix{A}{i}{n}}\n\\end{align*}\n\nwhich is known as expansion about row \\(i\\text{.}\\)",
    "type": "Theorem",
    "title": "Determinant Expansion about Rows",
    "section": "DM",
    "section_title": "Determinant of a Matrix",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Determinant of the Transpose",
    "back": "Suppose that \\(A\\) is a square matrix.  Then \\(\\detname{\\transpose{A}}=\\detname{A}\\text{.}\\)",
    "type": "Theorem",
    "title": "Determinant of the Transpose",
    "section": "DM",
    "section_title": "Determinant of a Matrix",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Determinant Expansion about Columns",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  Then for \\(1\\leq j\\leq n\\)\n\n\\begin{align*}\n\\detname{A}&=\n(-1)^{1+j}\\matrixentry{A}{1j}\\detname{\\submatrix{A}{1}{j}}+\n(-1)^{2+j}\\matrixentry{A}{2j}\\detname{\\submatrix{A}{2}{j}}\\\\\n&\\quad+(-1)^{3+j}\\matrixentry{A}{3j}\\detname{\\submatrix{A}{3}{j}}+\n\\cdots+\n(-1)^{n+j}\\matrixentry{A}{nj}\\detname{\\submatrix{A}{n}{j}}\n\\end{align*}\n\nwhich is known as expansion about column \\(j\\text{.}\\)",
    "type": "Theorem",
    "title": "Determinant Expansion about Columns",
    "section": "DM",
    "section_title": "Determinant of a Matrix",
    "category": "Theorem"
  },
  {
    "front": "Define: Eigenvalues and Eigenvectors of a Matrix",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{,}\\) \\(\\vect{x}\\neq\\zerovector\\) is a vector in \\(\\complex{n}\\text{,}\\) and \\(\\lambda\\) is a scalar in \\(\\complexes\\text{.}\\)   Then we say \\(\\vect{x}\\) is an eigenvector of \\(A\\) with eigenvalue \\(\\lambda\\) if\n\n\\begin{equation*}\nA\\vect{x}=\\lambda\\vect{x}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Eigenvalues and Eigenvectors of a Matrix",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Every Matrix Has an Eigenvalue",
    "back": "Suppose \\(A\\) is a square matrix.  Then \\(A\\) has at least one eigenvalue.",
    "type": "Theorem",
    "title": "Every Matrix Has an Eigenvalue",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Eigenvalues and Singular Matrices",
    "back": "Suppose \\(A\\) is a square matrix of size \\(n\\text{.}\\)  Then \\(\\lambda\\) is an eigenvalue of \\(A\\) if and only if \\(A-\\lambda I_n\\) is a singular matrix.",
    "type": "Theorem",
    "title": "Eigenvalues and Singular Matrices",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Theorem"
  },
  {
    "front": "Define: Characteristic Polynomial",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  Then the characteristic polynomial of \\(A\\) is the polynomial \\(\\charpoly{A}{x}\\) defined by\n\n\\begin{equation*}\n\\charpoly{A}{x}=\\detname{A-xI_n}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Characteristic Polynomial",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Eigenvalues of a Matrix are Roots of Characteristic Polynomials",
    "back": "Suppose \\(A\\) is a square matrix.  Then \\(\\lambda\\) is an eigenvalue of \\(A\\) if and only if \\(\\charpoly{A}{\\lambda}=0\\text{.}\\)",
    "type": "Theorem",
    "title": "Eigenvalues of a Matrix are Roots of Characteristic Polynomials",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Theorem"
  },
  {
    "front": "Define: Eigenspace of a Matrix",
    "back": "Suppose that \\(A\\) is a square matrix and \\(\\lambda\\) is an eigenvalue of \\(A\\text{.}\\)  Then the eigenspace of \\(A\\) for \\(\\lambda\\text{,}\\) \\(\\eigenspace{A}{\\lambda}\\text{,}\\) is the set of all the eigenvectors of \\(A\\) for \\(\\lambda\\text{,}\\) together with the inclusion of the zero vector.",
    "type": "Definition",
    "title": "Eigenspace of a Matrix",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Eigenspace for a Matrix is a Subspace",
    "back": "Suppose  \\(A\\) is a square matrix of size \\(n\\) and \\(\\lambda\\) is an eigenvalue of \\(A\\text{.}\\)  Then the eigenspace \\(\\eigenspace{A}{\\lambda}\\) is a subspace of the vector space \\(\\complex{n}\\text{.}\\)",
    "type": "Theorem",
    "title": "Eigenspace for a Matrix is a Subspace",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Eigenspace of a Matrix is a Null Space",
    "back": "Suppose  \\(A\\) is a square matrix of size \\(n\\) and \\(\\lambda\\) is an eigenvalue of \\(A\\text{.}\\)  Then\n\n\\begin{equation*}\n\\eigenspace{A}{\\lambda}=\\nsp{A-\\lambda I_n}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Eigenspace of a Matrix is a Null Space",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Theorem"
  },
  {
    "front": "Define: Algebraic Multiplicity of an Eigenvalue",
    "back": "Suppose that \\(A\\) is a square matrix and \\(\\lambda\\) is an eigenvalue of \\(A\\text{.}\\)  Then the algebraic multiplicity of \\(\\lambda\\text{,}\\) \\(\\algmult{A}{\\lambda}\\text{,}\\) is the highest power of \\((x-\\lambda)\\) that divides the characteristic polynomial, \\(\\charpoly{A}{x}\\text{.}\\)",
    "type": "Definition",
    "title": "Algebraic Multiplicity of an Eigenvalue",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Definition"
  },
  {
    "front": "Define: Geometric Multiplicity of an Eigenvalue",
    "back": "Suppose that \\(A\\) is a square matrix and \\(\\lambda\\) is an eigenvalue of \\(A\\text{.}\\)  Then the geometric multiplicity of \\(\\lambda\\text{,}\\) \\(\\geomult{A}{\\lambda}\\text{,}\\) is the dimension of the eigenspace \\(\\eigenspace{A}{\\lambda}\\text{.}\\)",
    "type": "Definition",
    "title": "Geometric Multiplicity of an Eigenvalue",
    "section": "EE",
    "section_title": "Eigenvalues and Eigenvectors",
    "category": "Definition"
  },
  {
    "front": "Define: Similar Matrices",
    "back": "Suppose \\(A\\) and \\(B\\) are two square matrices of size \\(n\\text{.}\\)  Then \\(A\\) and \\(B\\) are similar if there exists a nonsingular matrix of size \\(n\\text{,}\\) \\(S\\text{,}\\) such that \\(\\similar{A}{S}=B\\text{.}\\)\n\nEquivalently, we can require that \\(AS=SB\\text{.}\\)",
    "type": "Definition",
    "title": "Similar Matrices",
    "section": "SD",
    "section_title": "Similarity and Diagonalization",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Similarity is an Equivalence Relation",
    "back": "Suppose \\(A\\text{,}\\) \\(B\\) and \\(C\\) are square matrices of size \\(n\\text{.}\\)  Then we have the following three properties, by name.",
    "type": "Theorem",
    "title": "Similarity is an Equivalence Relation",
    "section": "SD",
    "section_title": "Similarity and Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Similar Matrices have Equal Eigenvalues",
    "back": "Suppose \\(A\\) and \\(B\\) are similar matrices.  Then \\(A\\) and \\(B\\) have the same eigenvalues, with identical algebraic and geometric multiplicities.",
    "type": "Theorem",
    "title": "Similar Matrices have Equal Eigenvalues",
    "section": "SD",
    "section_title": "Similarity and Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "Define: Diagonal Matrix",
    "back": "Suppose that \\(A\\) is a square matrix.  Then \\(A\\) is a diagonal matrix if \\(\\matrixentry{A}{ij}=0\\) whenever \\(i\\neq j\\text{.}\\)",
    "type": "Definition",
    "title": "Diagonal Matrix",
    "section": "SD",
    "section_title": "Similarity and Diagonalization",
    "category": "Definition"
  },
  {
    "front": "Define: Diagonalizable Matrix",
    "back": "Suppose \\(A\\) is a square matrix.  Then \\(A\\) is diagonalizable if \\(A\\) is similar to a diagonal matrix.",
    "type": "Definition",
    "title": "Diagonalizable Matrix",
    "section": "SD",
    "section_title": "Similarity and Diagonalization",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Diagonalization Characterization",
    "back": "Suppose \\(A\\) is a square matrix of size \\(n\\text{.}\\)  Then \\(A\\) is diagonalizable if and only if there exists a linearly independent set \\(S\\) that contains \\(n\\) eigenvectors of \\(A\\text{.}\\)",
    "type": "Theorem",
    "title": "Diagonalization Characterization",
    "section": "SD",
    "section_title": "Similarity and Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Diagonalizable Matrices have Full Eigenspaces",
    "back": "Suppose \\(A\\) is a square matrix.  Then \\(A\\) is diagonalizable if and only if \\(\\geomult{A}{\\lambda}=\\algmult{A}{\\lambda}\\) for every eigenvalue \\(\\lambda\\) of \\(A\\text{.}\\)",
    "type": "Theorem",
    "title": "Diagonalizable Matrices have Full Eigenspaces",
    "section": "SD",
    "section_title": "Similarity and Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Distinct Eigenvalues implies Diagonalizable",
    "back": "Suppose \\(A\\) is a square matrix of size \\(n\\) with \\(n\\) distinct eigenvalues.  Then \\(A\\) is diagonalizable.",
    "type": "Theorem",
    "title": "Distinct Eigenvalues implies Diagonalizable",
    "section": "SD",
    "section_title": "Similarity and Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "Define: Linear Transformation",
    "back": "A linear transformation , \\(\\ltdefn{T}{U}{V}\\text{,}\\) is a function that carries elements of the vector space \\(U\\) (called the domain ) to the vector space \\(V\\) (called the codomain ), and which has two additional properties",
    "type": "Definition",
    "title": "Linear Transformation",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Linear Transformations Take Zero to Zero",
    "back": "Suppose \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then \\(\\lteval{T}{\\zerovector}=\\zerovector\\text{.}\\)",
    "type": "Theorem",
    "title": "Linear Transformations Take Zero to Zero",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrices Build Linear Transformations",
    "back": "Suppose that \\(A\\) is an \\(m\\times n\\) matrix.  Define a function \\(\\ltdefn{T}{\\complex{n}}{\\complex{m}}\\) by \\(\\lteval{T}{\\vect{x}}=A\\vect{x}\\text{.}\\)  Then \\(T\\) is a linear transformation.",
    "type": "Theorem",
    "title": "Matrices Build Linear Transformations",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix of a Linear Transformation, Column Vectors",
    "back": "Suppose that \\(\\ltdefn{T}{\\complex{n}}{\\complex{m}}\\) is a linear transformation.  Then there is an \\(m\\times n\\) matrix \\(A\\) such that \\(\\lteval{T}{\\vect{x}}=A\\vect{x}\\text{.}\\)",
    "type": "Theorem",
    "title": "Matrix of a Linear Transformation, Column Vectors",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Linear Transformations and Linear Combinations",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation, \\(\\vectorlist{u}{t}\\) are vectors from \\(U\\) and \\(\\scalarlist{a}{t}\\) are scalars from \\(\\complexes\\text{.}\\)  Then\n\n\\begin{equation*}\n\\lteval{T}{\\lincombo{a}{u}{t}}\n=\na_1\\lteval{T}{\\vect{u}_1}+\na_2\\lteval{T}{\\vect{u}_2}+\na_3\\lteval{T}{\\vect{u}_3}+\\cdots+\na_t\\lteval{T}{\\vect{u}_t}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Linear Transformations and Linear Combinations",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Linear Transformation Defined on a Basis",
    "back": "Suppose \\(U\\) is a vector space with basis \\(B=\\set{\\vectorlist{u}{n}}\\) and the vector space \\(V\\) contains the vectors \\(\\vectorlist{v}{n}\\) (which may not be distinct).   Then there is a unique linear transformation, \\(\\ltdefn{T}{U}{V}\\text{,}\\) such that \\(\\lteval{T}{\\vect{u}_i}=\\vect{v}_i\\text{,}\\) \\(1\\leq i\\leq n\\text{.}\\)",
    "type": "Theorem",
    "title": "Linear Transformation Defined on a Basis",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "Define: Preimage",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  For each \\(\\vect{v}\\text{,}\\) define the preimage of \\(\\vect{v}\\) to be the subset of \\(U\\) given by\n\n\\begin{equation*}\n\\preimage{T}{\\vect{v}}=\\setparts{\\vect{u}\\in U}{\\lteval{T}{\\vect{u}}=\\vect{v}}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Preimage",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "Define: Linear Transformation Addition",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{U}{V}\\) are two linear transformations with the same domain and codomain.  Then their sum is the function \\(\\ltdefn{T+S}{U}{V}\\) whose outputs are defined by\n\n\\begin{equation*}\n\\lteval{(T+S)}{\\vect{u}}=\\lteval{T}{\\vect{u}}+\\lteval{S}{\\vect{u}}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Linear Transformation Addition",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Sum of Linear Transformations is a Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{U}{V}\\) are two linear transformations with the same domain and codomain.  Then \\(\\ltdefn{T+S}{U}{V}\\) is a linear transformation.",
    "type": "Theorem",
    "title": "Sum of Linear Transformations is a Linear Transformation",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "Define: Linear Transformation Scalar Multiplication",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation and \\(\\alpha\\in\\complexes\\text{.}\\)  Then the scalar multiple is the function \\(\\ltdefn{\\alpha T}{U}{V}\\) whose outputs are defined by\n\n\\begin{equation*}\n\\lteval{(\\alpha T)}{\\vect{u}}=\\alpha\\lteval{T}{\\vect{u}}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Linear Transformation Scalar Multiplication",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Multiple of a Linear Transformation is a Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation and \\(\\alpha\\in\\complexes\\text{.}\\)  Then \\(\\ltdefn{(\\alpha T)}{U}{V}\\) is a linear transformation.",
    "type": "Theorem",
    "title": "Multiple of a Linear Transformation is a Linear Transformation",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Vector Space of Linear Transformations",
    "back": "Suppose that \\(U\\) and \\(V\\) are vector spaces.  Then the set of all linear transformations from \\(U\\) to \\(V\\text{,}\\) \\(\\vslt{U}{V}\\text{,}\\) is a vector space when the operations are those given in Definition LTA and Definition LTSM .",
    "type": "Theorem",
    "title": "Vector Space of Linear Transformations",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "Define: Linear Transformation Composition",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{V}{W}\\) are linear transformations.  Then the composition of \\(S\\) and \\(T\\) is the function \\(\\ltdefn{(\\compose{S}{T})}{U}{W}\\) whose outputs are defined by\n\n\\begin{equation*}\n\\lteval{(\\compose{S}{T})}{\\vect{u}}=\\lteval{S}{\\lteval{T}{\\vect{u}}}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Linear Transformation Composition",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Composition of Linear Transformations is a Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{V}{W}\\) are linear transformations.  Then \\(\\ltdefn{(\\compose{S}{T})}{U}{W}\\) is a linear transformation.",
    "type": "Theorem",
    "title": "Composition of Linear Transformations is a Linear Transformation",
    "section": "LT",
    "section_title": "Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "Define: Injective Linear Transformation",
    "back": "Suppose \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then \\(T\\) is injective if whenever \\(\\lteval{T}{\\vect{x}}=\\lteval{T}{\\vect{y}}\\text{,}\\) then \\(\\vect{x}=\\vect{y}\\text{.}\\)",
    "type": "Definition",
    "title": "Injective Linear Transformation",
    "section": "ILT",
    "section_title": "Injective Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "Define: Kernel of a Linear Transformation",
    "back": "Suppose \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then the kernel of \\(T\\) is the set\n\n\\begin{equation*}\n\\krn{T}=\\setparts{\\vect{u}\\in U}{\\lteval{T}{\\vect{u}}=\\zerovector}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Kernel of a Linear Transformation",
    "section": "ILT",
    "section_title": "Injective Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Kernel of a Linear Transformation is a Subspace",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then the kernel of \\(T\\text{,}\\) \\(\\krn{T}\\text{,}\\) is a subspace of \\(U\\text{.}\\)",
    "type": "Theorem",
    "title": "Kernel of a Linear Transformation is a Subspace",
    "section": "ILT",
    "section_title": "Injective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Kernel and Preimage",
    "back": "Suppose \\(\\ltdefn{T}{U}{V}\\) is a linear transformation and \\(\\vect{v}\\in V\\text{.}\\)  If the preimage \\(\\preimage{T}{\\vect{v}}\\) is nonempty, and \\(\\vect{u}\\in\\preimage{T}{\\vect{v}}\\)  then\n\n\\begin{equation*}\n\\preimage{T}{\\vect{v}}=\n\\setparts{\\vect{u}+\\vect{z}}{\\vect{z}\\in\\krn{T}}\n=\\vect{u}+\\krn{T}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Kernel and Preimage",
    "section": "ILT",
    "section_title": "Injective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Kernel of an Injective Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then \\(T\\) is injective if and only if the kernel of \\(T\\) is trivial, \\(\\krn{T}=\\set{\\zerovector}\\text{.}\\)",
    "type": "Theorem",
    "title": "Kernel of an Injective Linear Transformation",
    "section": "ILT",
    "section_title": "Injective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Injective Linear Transformations and Linear Independence",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is an injective linear transformation and\n\n\\begin{align*}\nS&=\\set{\\vectorlist{u}{t}}\n\\end{align*}\n\nis a linearly independent subset of \\(U\\text{.}\\)  Then\n\n\\begin{align*}\nR&=\\set{\\lteval{T}{\\vect{u}_1},\\,\\lteval{T}{\\vect{u}_2},\\,\\lteval{T}{\\vect{u}_3},\\,\\ldots,\\,\\lteval{T}{\\vect{u}_t}}\n\\end{align*}\n\nis a linearly independent subset of \\(V\\text{.}\\)",
    "type": "Theorem",
    "title": "Injective Linear Transformations and Linear Independence",
    "section": "ILT",
    "section_title": "Injective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Injective Linear Transformations and Bases",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation and\n\n\\begin{align*}\nB&=\\set{\\vectorlist{u}{m}}\n\\end{align*}\n\nis a basis of \\(U\\text{.}\\)  Then \\(T\\) is injective if and only if\n\n\\begin{align*}\nC&=\\set{\\lteval{T}{\\vect{u}_1},\\,\\lteval{T}{\\vect{u}_2},\\,\\lteval{T}{\\vect{u}_3},\\,\\ldots,\\,\\lteval{T}{\\vect{u}_m}}\n\\end{align*}\n\nis a linearly independent subset of \\(V\\text{.}\\)",
    "type": "Theorem",
    "title": "Injective Linear Transformations and Bases",
    "section": "ILT",
    "section_title": "Injective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Injective Linear Transformations and Dimension",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is an injective linear transformation.  Then \\(\\dimension{U}\\leq\\dimension{V}\\text{.}\\)",
    "type": "Theorem",
    "title": "Injective Linear Transformations and Dimension",
    "section": "ILT",
    "section_title": "Injective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Composition of Injective Linear Transformations is Injective",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{V}{W}\\) are injective linear transformations.  Then \\(\\ltdefn{(\\compose{S}{T})}{U}{W}\\) is an injective linear transformation.",
    "type": "Theorem",
    "title": "Composition of Injective Linear Transformations is Injective",
    "section": "ILT",
    "section_title": "Injective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "Define: Surjective Linear Transformation",
    "back": "Suppose \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then \\(T\\) is surjective if for every \\(\\vect{v}\\in V\\) there exists a \\(\\vect{u}\\in U\\) so that \\(\\lteval{T}{\\vect{u}}=\\vect{v}\\text{.}\\)",
    "type": "Definition",
    "title": "Surjective Linear Transformation",
    "section": "SLT",
    "section_title": "Surjective Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "Define: Range of a Linear Transformation",
    "back": "Suppose \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then the range of \\(T\\) is the set\n\n\\begin{equation*}\n\\rng{T}=\\setparts{\\lteval{T}{\\vect{u}}}{\\vect{u}\\in U}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Range of a Linear Transformation",
    "section": "SLT",
    "section_title": "Surjective Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Range of a Linear Transformation is a Subspace",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then the range of \\(T\\text{,}\\) \\(\\rng{T}\\text{,}\\) is a subspace of \\(V\\text{.}\\)",
    "type": "Theorem",
    "title": "Range of a Linear Transformation is a Subspace",
    "section": "SLT",
    "section_title": "Surjective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Range of a Surjective Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then \\(T\\) is surjective if and only if the range of \\(T\\) equals the codomain, \\(\\rng{T}=V\\text{.}\\)",
    "type": "Theorem",
    "title": "Range of a Surjective Linear Transformation",
    "section": "SLT",
    "section_title": "Surjective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Spanning Set for Range of a Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation and\n\n\\begin{align*}\nS&=\\set{\\vectorlist{u}{t}}\n\\end{align*}\n\nspans \\(U\\text{.}\\)  Then\n\n\\begin{align*}\nR&=\\set{\\lteval{T}{\\vect{u}_1},\\,\\lteval{T}{\\vect{u}_2},\\,\\lteval{T}{\\vect{u}_3},\\,\\ldots,\\,\\lteval{T}{\\vect{u}_t}}\n\\end{align*}\n\nspans \\(\\rng{T}\\text{.}\\)",
    "type": "Theorem",
    "title": "Spanning Set for Range of a Linear Transformation",
    "section": "SLT",
    "section_title": "Surjective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Range and Preimage",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then\n\n\\begin{equation*}\n\\vect{v}\\in\\rng{T}\\text{ if and only if }\\preimage{T}{\\vect{v}}\\neq\\emptyset\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Range and Preimage",
    "section": "SLT",
    "section_title": "Surjective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Surjective Linear Transformations and Bases",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation and\n\n\\begin{align*}\nB&=\\set{\\vectorlist{u}{m}}\n\\end{align*}\n\nis a basis of \\(U\\text{.}\\)  Then \\(T\\) is surjective if and only if\n\n\\begin{align*}\nC&=\\set{\\lteval{T}{\\vect{u}_1},\\,\\lteval{T}{\\vect{u}_2},\\,\\lteval{T}{\\vect{u}_3},\\,\\ldots,\\,\\lteval{T}{\\vect{u}_m}}\n\\end{align*}\n\nis a spanning set for \\(V\\text{.}\\)",
    "type": "Theorem",
    "title": "Surjective Linear Transformations and Bases",
    "section": "SLT",
    "section_title": "Surjective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Surjective Linear Transformations and Dimension",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a surjective linear transformation.  Then \\(\\dimension{U}\\geq\\dimension{V}\\text{.}\\)",
    "type": "Theorem",
    "title": "Surjective Linear Transformations and Dimension",
    "section": "SLT",
    "section_title": "Surjective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Composition of Surjective Linear Transformations is Surjective",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{V}{W}\\) are surjective linear transformations.  Then \\(\\ltdefn{(\\compose{S}{T})}{U}{W}\\) is a surjective linear transformation.",
    "type": "Theorem",
    "title": "Composition of Surjective Linear Transformations is Surjective",
    "section": "SLT",
    "section_title": "Surjective Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "Define: Identity Linear Transformation",
    "back": "The identity linear transformation on the vector space \\(W\\) is defined as\n\n\\begin{equation*}\n\\ltdefn{I_W}{W}{W},\\quad\\quad \\lteval{I_W}{\\vect{w}}=\\vect{w}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Identity Linear Transformation",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "Define: Invertible Linear Transformations",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  If there is a function \\(\\ltdefn{S}{V}{U}\\) such that\n\n\\begin{align*}\n\\compose{S}{T}&=I_U & \\compose{T}{S}&=I_V\n\\end{align*}\n\nthen \\(T\\) is invertible .  In this case, we call \\(S\\) the inverse of \\(T\\) and write \\(S=\\ltinverse{T}\\text{.}\\)",
    "type": "Definition",
    "title": "Invertible Linear Transformations",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Inverse of a Linear Transformation is a Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is an invertible linear transformation.  Then the function \\(\\ltdefn{\\ltinverse{T}}{V}{U}\\) is a linear transformation.",
    "type": "Theorem",
    "title": "Inverse of a Linear Transformation is a Linear Transformation",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Inverse of an Invertible Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is an invertible linear transformation.  Then \\(\\ltinverse{T}\\) is an invertible linear transformation and \\(\\ltinverse{\\left(\\ltinverse{T}\\right)}=T\\text{.}\\)",
    "type": "Theorem",
    "title": "Inverse of an Invertible Linear Transformation",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Invertible Linear Transformations are Injective and Surjective",
    "back": "Suppose \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then \\(T\\) is invertible if and only if \\(T\\) is injective and surjective.",
    "type": "Theorem",
    "title": "Invertible Linear Transformations are Injective and Surjective",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Composition of Invertible Linear Transformations",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{V}{W}\\) are invertible linear transformations.  Then the composition, \\(\\ltdefn{\\left(\\compose{S}{T}\\right)}{U}{W}\\) is an invertible linear transformation.",
    "type": "Theorem",
    "title": "Composition of Invertible Linear Transformations",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Inverse of a Composition of Linear Transformations",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{V}{W}\\) are invertible linear transformations. Then \\(\\compose{S}{T}\\) is invertible and \\(\\ltinverse{\\left(\\compose{S}{T}\\right)}=\\compose{\\ltinverse{T}}{\\ltinverse{S}}\\text{.}\\)",
    "type": "Theorem",
    "title": "Inverse of a Composition of Linear Transformations",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "Define: Isomorphic Vector Spaces",
    "back": "Two vector spaces \\(U\\) and \\(V\\) are isomorphic if there exists an invertible linear transformation \\(T\\) with domain \\(U\\) and codomain \\(V\\text{,}\\) \\(\\ltdefn{T}{U}{V}\\text{.}\\)  In this case, we write \\(U\\isomorphic V\\text{,}\\) and the linear transformation \\(T\\) is known as an isomorphism between \\(U\\) and \\(V\\text{.}\\)",
    "type": "Definition",
    "title": "Isomorphic Vector Spaces",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Isomorphic Vector Spaces have Equal Dimension",
    "back": "Suppose \\(U\\) and \\(V\\) are isomorphic vector spaces.  Then \\(\\dimension{U}=\\dimension{V}\\text{.}\\)",
    "type": "Theorem",
    "title": "Isomorphic Vector Spaces have Equal Dimension",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "Define: Rank Of a Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then the rank of \\(T\\text{,}\\) \\(\\rank{T}\\text{,}\\) is the dimension of the range of \\(T\\text{,}\\)\n\n\\begin{equation*}\n\\rank{T}=\\dimension{\\rng{T}}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Rank Of a Linear Transformation",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "Define: Nullity Of a Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then the nullity of \\(T\\text{,}\\) \\(\\nullity{T}\\text{,}\\) is the dimension of the kernel of \\(T\\text{,}\\)\n\n\\begin{equation*}\n\\nullity{T}=\\dimension{\\krn{T}}\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Nullity Of a Linear Transformation",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Rank Of a Surjective Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then the rank of \\(T\\) is the dimension of \\(V\\text{,}\\) \\(\\rank{T}=\\dimension{V}\\text{,}\\) if and only if \\(T\\) is surjective.",
    "type": "Theorem",
    "title": "Rank Of a Surjective Linear Transformation",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nullity Of an Injective Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then the nullity of \\(T\\) is zero, \\(\\nullity{T}=0\\text{,}\\) if and only if \\(T\\) is injective.",
    "type": "Theorem",
    "title": "Nullity Of an Injective Linear Transformation",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Rank Plus Nullity is Domain Dimension",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation.  Then\n\n\\begin{equation*}\n\\rank{T}+\\nullity{T}=\\dimension{U}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Rank Plus Nullity is Domain Dimension",
    "section": "IVLT",
    "section_title": "Invertible Linear Transformations",
    "category": "Theorem"
  },
  {
    "front": "Define: Vector Representation",
    "back": "Suppose that \\(V\\) is a vector space with a basis \\(B=\\set{\\vectorlist{v}{n}}\\text{.}\\)  Define a function \\(\\ltdefn{\\vectrepname{B}}{V}{\\complex{n}}\\) as follows.  For \\(\\vect{w}\\in V\\) define the column vector \\(\\vectrep{B}{\\vect{w}}\\in\\complex{n}\\) by\n\n\\begin{align*}\n\\vect{w}\n&=\n\\vectorentry{\\vectrep{B}{\\vect{w}}}{1}\\vect{v}_1+\n\\vectorentry{\\vectrep{B}{\\vect{w}}}{2}\\vect{v}_2+\n\\vectorentry{\\vectrep{B}{\\vect{w}}}{3}\\vect{v}_3+\n\\cdots+\n\\vectorentry{\\vectrep{B}{\\vect{w}}}{n}\\vect{v}_n\\text{.}\n\\end{align*}",
    "type": "Definition",
    "title": "Vector Representation",
    "section": "VR",
    "section_title": "Vector Representations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Vector Representation is a Linear Transformation",
    "back": "The function \\(\\vectrepname{B}\\) ( Definition VR ) is a linear transformation.",
    "type": "Theorem",
    "title": "Vector Representation is a Linear Transformation",
    "section": "VR",
    "section_title": "Vector Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Vector Representation is Injective",
    "back": "The function \\(\\vectrepname{B}\\) ( Definition VR ) is an injective linear transformation.",
    "type": "Theorem",
    "title": "Vector Representation is Injective",
    "section": "VR",
    "section_title": "Vector Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Vector Representation is Surjective",
    "back": "The function \\(\\vectrepname{B}\\) ( Definition VR ) is a surjective linear transformation.",
    "type": "Theorem",
    "title": "Vector Representation is Surjective",
    "section": "VR",
    "section_title": "Vector Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Vector Representation is an Invertible Linear Transformation",
    "back": "The function \\(\\vectrepname{B}\\) ( Definition VR ) is an invertible linear transformation.",
    "type": "Theorem",
    "title": "Vector Representation is an Invertible Linear Transformation",
    "section": "VR",
    "section_title": "Vector Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Characterization of Finite Dimensional Vector Spaces",
    "back": "Suppose that \\(V\\) is a vector space with dimension \\(n\\text{.}\\)  Then \\(V\\) is isomorphic to \\(\\complex{n}\\text{.}\\)",
    "type": "Theorem",
    "title": "Characterization of Finite Dimensional Vector Spaces",
    "section": "VR",
    "section_title": "Vector Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Isomorphism of Finite Dimensional Vector Spaces",
    "back": "Suppose \\(U\\) and \\(V\\) are both finite-dimensional vector spaces.  Then \\(U\\) and \\(V\\) are isomorphic if and only if \\(\\dimension{U}=\\dimension{V}\\text{.}\\)",
    "type": "Theorem",
    "title": "Isomorphism of Finite Dimensional Vector Spaces",
    "section": "VR",
    "section_title": "Vector Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Coordinatization and Linear Independence",
    "back": "Suppose that \\(U\\) is a vector space with a basis \\(B\\) of size \\(n\\text{.}\\)  Then\n\n\\begin{gather*}\nS=\\set{\\vectorlist{u}{k}}\n\\end{gather*}\n\nis a linearly independent subset of \\(U\\) if and only if\n\n\\begin{gather*}\nR=\\set{\\vectrep{B}{\\vect{u}_1},\\,\\vectrep{B}{\\vect{u}_2},\\,\\vectrep{B}{\\vect{u}_3},\\,\\ldots,\\,\\vectrep{B}{\\vect{u}_k}}\n\\end{gather*}\n\nis a linearly independent subset of \\(\\complex{n}\\text{.}\\)",
    "type": "Theorem",
    "title": "Coordinatization and Linear Independence",
    "section": "VR",
    "section_title": "Vector Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Coordinatization and Spanning Sets",
    "back": "Suppose that \\(U\\) is a vector space with a basis \\(B\\) of size \\(n\\text{.}\\)  Then\n\n\\begin{gather*}\n\\vect{u}\\in\\spn{\\set{\\vectorlist{u}{k}}}\n\\end{gather*}\n\nif and only if\n\n\\begin{gather*}\n\\vectrep{B}{\\vect{u}}\\in\\spn{\\set{\\vectrep{B}{\\vect{u}_1},\\,\\vectrep{B}{\\vect{u}_2},\\,\\vectrep{B}{\\vect{u}_3},\\,\\ldots,\\,\\vectrep{B}{\\vect{u}_k}}}\\text{.}\n\\end{gather*}",
    "type": "Theorem",
    "title": "Coordinatization and Spanning Sets",
    "section": "VR",
    "section_title": "Vector Representations",
    "category": "Theorem"
  },
  {
    "front": "Define: Matrix Representation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation, \\(B=\\set{\\vectorlist{u}{n}}\\) is a basis for \\(U\\) of size \\(n\\text{,}\\) and \\(C\\) is a basis for \\(V\\) of size \\(m\\text{.}\\)  Then the matrix representation of \\(T\\) relative to \\(B\\) and \\(C\\) is the \\(m\\times n\\) matrix,\n\n\\begin{equation*}\n\\matrixrep{T}{B}{C}=\\left[\n\\left.\\vectrep{C}{\\lteval{T}{\\vect{u}_1}}\\right|\n\\left.\\vectrep{C}{\\lteval{T}{\\vect{u}_2}}\\right|\n\\left.\\vectrep{C}{\\lteval{T}{\\vect{u}_3}}\\right|\n\\ldots\n\\left|\\vectrep{C}{\\lteval{T}{\\vect{u}_n}}\\right.\n\\right]\\text{.}\n\\end{equation*}",
    "type": "Definition",
    "title": "Matrix Representation",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Fundamental Theorem of Matrix Representation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation, \\(B\\) is a basis for \\(U\\text{,}\\) \\(C\\) is a basis for \\(V\\) and \\(\\matrixrep{T}{B}{C}\\) is the matrix representation of \\(T\\) relative to \\(B\\) and \\(C\\text{.}\\)  Then, for any \\(\\vect{u}\\in U\\text{,}\\)\n\n\\begin{equation*}\n\\vectrep{C}{\\lteval{T}{\\vect{u}}}=\\matrixrep{T}{B}{C}\\left(\\vectrep{B}{\\vect{u}}\\right)\n\\end{equation*}\n\nor equivalently\n\n\\begin{equation*}\n\\lteval{T}{\\vect{u}}=\\vectrepinv{C}{\\matrixrep{T}{B}{C}\\left(\\vectrep{B}{\\vect{u}}\\right)}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Fundamental Theorem of Matrix Representation",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Representation of a Sum of Linear Transformations",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{U}{V}\\) are linear transformations, \\(B\\) is a basis of \\(U\\) and \\(C\\) is a basis of \\(V\\text{.}\\)  Then\n\n\\begin{equation*}\n\\matrixrep{T+S}{B}{C}=\\matrixrep{T}{B}{C}+\\matrixrep{S}{B}{C}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Matrix Representation of a Sum of Linear Transformations",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Representation of a Multiple of a Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation, \\(\\alpha\\in\\complexes\\text{,}\\) \\(B\\) is a basis of \\(U\\) and \\(C\\) is a basis of \\(V\\text{.}\\)  Then\n\n\\begin{equation*}\n\\matrixrep{\\alpha T}{B}{C}=\\alpha\\matrixrep{T}{B}{C}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Matrix Representation of a Multiple of a Linear Transformation",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Representation of a Composition of Linear Transformations",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) and \\(\\ltdefn{S}{V}{W}\\) are linear transformations, \\(B\\) is a basis of \\(U\\text{,}\\) \\(C\\) is a basis of \\(V\\text{,}\\) and \\(D\\) is a basis of \\(W\\text{.}\\)  Then\n\n\\begin{equation*}\n\\matrixrep{\\compose{S}{T}}{B}{D}=\\matrixrep{S}{C}{D}\\matrixrep{T}{B}{C}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Matrix Representation of a Composition of Linear Transformations",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Kernel and Null Space Isomorphism",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation, \\(B\\) is a basis for \\(U\\) of size \\(n\\text{,}\\) and \\(C\\) is a basis for \\(V\\text{.}\\)  Then the kernel of \\(T\\) is isomorphic to the null space of \\(\\matrixrep{T}{B}{C}\\text{,}\\)\n\n\\begin{equation*}\n\\krn{T}\\isomorphic\\nsp{\\matrixrep{T}{B}{C}}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Kernel and Null Space Isomorphism",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Range and Column Space Isomorphism",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation, \\(B\\) is a basis for \\(U\\) of size \\(n\\text{,}\\) and \\(C\\) is a basis for \\(V\\) of size \\(m\\text{.}\\)  Then the range of \\(T\\) is isomorphic to the column space of \\(\\matrixrep{T}{B}{C}\\text{,}\\)\n\n\\begin{equation*}\n\\rng{T}\\isomorphic\\csp{\\matrixrep{T}{B}{C}}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Range and Column Space Isomorphism",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Invertible Matrix Representations",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation, \\(B\\) is a basis for \\(U\\) and \\(C\\) is a basis for \\(V\\text{.}\\) Then \\(T\\) is an invertible linear transformation if and only if the matrix representation of \\(T\\) relative to \\(B\\) and \\(C\\text{,}\\) \\(\\matrixrep{T}{B}{C}\\) is an invertible matrix.  When \\(T\\) is invertible,\n\n\\begin{equation*}\n\\matrixrep{\\ltinverse{T}}{C}{B}=\\inverse{\\left(\\matrixrep{T}{B}{C}\\right)}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Invertible Matrix Representations",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Invertible Matrices, Invertible Linear Transformation",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\) and \\(\\ltdefn{T}{\\complex{n}}{\\complex{n}}\\) is the linear transformation defined by \\(\\lteval{T}{\\vect{x}}=A\\vect{x}\\text{.}\\)  Then \\(A\\) is an invertible matrix if and only if \\(T\\) is an invertible linear transformation.",
    "type": "Theorem",
    "title": "Invertible Matrices, Invertible Linear Transformation",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Nonsingular Matrix Equivalences, Round 9",
    "back": "Suppose that \\(A\\) is a square matrix of size \\(n\\text{.}\\)  The following are equivalent.",
    "type": "Theorem",
    "title": "Nonsingular Matrix Equivalences, Round 9",
    "section": "MR",
    "section_title": "Matrix Representations",
    "category": "Theorem"
  },
  {
    "front": "Define: Eigenvalue and Eigenvector of a Linear Transformation",
    "back": "Suppose that \\(\\ltdefn{T}{V}{V}\\) is a linear transformation.  Then a nonzero vector \\(\\vect{v}\\in V\\) is an eigenvector of \\(T\\) for the eigenvalue \\(\\lambda\\) if \\(\\lteval{T}{\\vect{v}}=\\lambda\\vect{v}\\text{.}\\)",
    "type": "Definition",
    "title": "Eigenvalue and Eigenvector of a Linear Transformation",
    "section": "CB",
    "section_title": "Change of Basis",
    "category": "Definition"
  },
  {
    "front": "Define: Change-of-Basis Matrix",
    "back": "Suppose that \\(V\\) is a vector space, and \\(\\ltdefn{I_V}{V}{V}\\) is the identity linear transformation on \\(V\\text{.}\\)  Let \\(B=\\set{\\vectorlist{v}{n}}\\) and \\(C\\) be two bases of \\(V\\text{.}\\)  Then the change-of-basis matrix from \\(B\\) to \\(C\\) is the matrix representation of \\(I_V\\) relative to \\(B\\) and \\(C\\text{,}\\)\n\n\\begin{align*}\n\\cbm{B}{C}&=\\matrixrep{I_V}{B}{C}\\\\\n&=\\matrixrepcolumns{I_V}{C}{v}{n}\\\\\n&=\\left\\lbrack\n\\left.\\vectrep{C}{\\vect{v}_1}\\right|\n\\left.\\vectrep{C}{\\vect{v}_2}\\right|\n\\left.\\vectrep{C}{\\vect{v}_3}\\right|\n\\ldots\n\\left|\\vectrep{C}{\\vect{v}_n}\\right.\n\\right\\rbrack\\text{.}\n\\end{align*}",
    "type": "Definition",
    "title": "Change-of-Basis Matrix",
    "section": "CB",
    "section_title": "Change of Basis",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Change-of-Basis",
    "back": "Suppose that \\(\\vect{v}\\) is a vector in the vector space \\(V\\) and \\(B\\) and \\(C\\) are bases of \\(V\\text{.}\\)  Then\n\n\\begin{equation*}\n\\vectrep{C}{\\vect{v}}=\\cbm{B}{C}\\vectrep{B}{\\vect{v}}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Change-of-Basis",
    "section": "CB",
    "section_title": "Change of Basis",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Inverse of Change-of-Basis Matrix",
    "back": "Suppose that \\(V\\) is a vector space, and \\(B\\) and \\(C\\) are bases of \\(V\\text{.}\\)  Then the change-of-basis matrix \\(\\cbm{B}{C}\\) is nonsingular and\n\n\\begin{equation*}\n\\inverse{\\cbm{B}{C}}=\\cbm{C}{B}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Inverse of Change-of-Basis Matrix",
    "section": "CB",
    "section_title": "Change of Basis",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Matrix Representation and Change of Basis",
    "back": "Suppose that \\(\\ltdefn{T}{U}{V}\\) is a linear transformation, \\(B\\) and \\(C\\) are bases for \\(U\\text{,}\\) and \\(D\\) and \\(E\\) are bases for \\(V\\text{.}\\)  Then\n\n\\begin{equation*}\n\\matrixrep{T}{B}{D}=\\cbm{E}{D}\\matrixrep{T}{C}{E}\\cbm{B}{C}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Matrix Representation and Change of Basis",
    "section": "CB",
    "section_title": "Change of Basis",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Similarity and Change of Basis",
    "back": "Suppose that \\(\\ltdefn{T}{V}{V}\\) is a linear transformation and \\(B\\) and \\(C\\) are bases of \\(V\\text{.}\\)  Then\n\n\\begin{equation*}\n\\matrixrep{T}{B}{B}=\\inverse{\\cbm{B}{C}}\\matrixrep{T}{C}{C}\\cbm{B}{C}\\text{.}\n\\end{equation*}",
    "type": "Theorem",
    "title": "Similarity and Change of Basis",
    "section": "CB",
    "section_title": "Change of Basis",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Eigenvalues, Eigenvectors, Representations",
    "back": "Suppose that \\(\\ltdefn{T}{V}{V}\\) is a linear transformation and \\(B\\) is a basis of \\(V\\text{.}\\)  Then \\(\\vect{v}\\in V\\) is an eigenvector of \\(T\\) for the eigenvalue \\(\\lambda\\) if and only if \\(\\vectrep{B}{\\vect{v}}\\) is an eigenvector of \\(\\matrixrep{T}{B}{B}\\) for the eigenvalue \\(\\lambda\\text{.}\\)",
    "type": "Theorem",
    "title": "Eigenvalues, Eigenvectors, Representations",
    "section": "CB",
    "section_title": "Change of Basis",
    "category": "Theorem"
  },
  {
    "front": "Define: Upper Triangular Matrix",
    "back": "The \\(n\\times n\\) square matrix \\(A\\) is upper triangular if \\(\\matrixentry{A}{ij}=0\\) whenever \\(i\\gt j\\text{.}\\)",
    "type": "Definition",
    "title": "Upper Triangular Matrix",
    "section": "OD",
    "section_title": "Orthonormal Diagonalization",
    "category": "Definition"
  },
  {
    "front": "Define: Lower Triangular Matrix",
    "back": "The \\(n\\times n\\) square matrix \\(A\\) is lower triangular if \\(\\matrixentry{A}{ij}=0\\) whenever \\(i\\lt j\\text{.}\\)",
    "type": "Definition",
    "title": "Lower Triangular Matrix",
    "section": "OD",
    "section_title": "Orthonormal Diagonalization",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Product of Triangular Matrices is Triangular",
    "back": "Suppose that \\(A\\) and \\(B\\) are square matrices of size \\(n\\) that are triangular of the same type.  Then \\(AB\\) is also triangular of that type.",
    "type": "Theorem",
    "title": "Product of Triangular Matrices is Triangular",
    "section": "OD",
    "section_title": "Orthonormal Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Inverse of a Triangular Matrix is Triangular",
    "back": "Suppose that \\(A\\) is a nonsingular matrix of size \\(n\\) that is triangular.  Then the inverse of \\(A\\text{,}\\) \\(\\inverse{A}\\text{,}\\) is triangular of the same type.  Furthermore, the diagonal entries of \\(\\inverse{A}\\) are the reciprocals of the corresponding diagonal entries of \\(A\\text{.}\\)  More precisely, \\(\\matrixentry{\\inverse{A}}{ii}=\\matrixentry{A}{ii}^{-1}\\text{.}\\)",
    "type": "Theorem",
    "title": "Inverse of a Triangular Matrix is Triangular",
    "section": "OD",
    "section_title": "Orthonormal Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Upper Triangular Matrix Representation",
    "back": "Suppose that \\(\\ltdefn{T}{V}{V}\\) is a linear transformation.  Then there is a basis \\(B\\) for \\(V\\) such that the matrix representation of \\(T\\) relative to \\(B\\text{,}\\) \\(\\matrixrep{T}{B}{B}\\text{,}\\) is an upper triangular matrix.  Each diagonal entry is an eigenvalue of \\(T\\text{,}\\) and if \\(\\lambda\\) is an eigenvalue of \\(T\\text{,}\\) then \\(\\lambda\\) occurs \\(\\algmult{T}{\\lambda}\\) times on the diagonal.",
    "type": "Theorem",
    "title": "Upper Triangular Matrix Representation",
    "section": "OD",
    "section_title": "Orthonormal Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Orthonormal Basis for Upper Triangular Representation",
    "back": "Suppose that \\(A\\) is a square matrix.  Then there is a unitary matrix \\(U\\text{,}\\) and an upper triangular matrix \\(T\\text{,}\\) such that\n\n\\begin{gather*}\n\\adjoint{U}AU=T\n\\end{gather*}\n\nand \\(T\\) has the eigenvalues of \\(A\\) as the entries of the diagonal.",
    "type": "Theorem",
    "title": "Orthonormal Basis for Upper Triangular Representation",
    "section": "OD",
    "section_title": "Orthonormal Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "Define: Normal Matrix",
    "back": "The square matrix \\(A\\) is normal if \\(\\adjoint{A}A=A\\adjoint{A}\\text{.}\\)",
    "type": "Definition",
    "title": "Normal Matrix",
    "section": "OD",
    "section_title": "Orthonormal Diagonalization",
    "category": "Definition"
  },
  {
    "front": "State the Theorem: Orthonormal Diagonalization",
    "back": "Suppose that \\(A\\) is a square matrix.   Then there is a unitary matrix \\(U\\) and a diagonal matrix \\(D\\text{,}\\) with diagonal entries equal to the eigenvalues of \\(A\\text{,}\\) such that \\(\\adjoint{U}AU=D\\) if and only if \\(A\\) is a normal matrix.",
    "type": "Theorem",
    "title": "Orthonormal Diagonalization",
    "section": "OD",
    "section_title": "Orthonormal Diagonalization",
    "category": "Theorem"
  },
  {
    "front": "State the Theorem: Orthonormal Bases and Normal Matrices",
    "back": "Suppose that \\(A\\) is a normal matrix of size \\(n\\text{.}\\)  Then there is an orthonormal basis of \\(\\complex{n}\\) composed of eigenvectors of \\(A\\text{.}\\)",
    "type": "Theorem",
    "title": "Orthonormal Bases and Normal Matrices",
    "section": "OD",
    "section_title": "Orthonormal Diagonalization",
    "category": "Theorem"
  }
];